const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();
// Require the necessary discord.js classes
// const dotenv = require('dotenv');
// dotenv.config();

const { TOKEN } = process.env;
const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
	],
});
// slash commands
client.commands = new Collection();
// retrieve commands from commands/*.js
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.once(Events.ClientReady, c => {
	console.log(`Nitty is logged in as ${c.user.tag} with id ${c.user.id}`);
	(async () => {
		console.log(`Nitty is refreshing application (/) commands.`);
		try{
			// Refreshes all commands globally -> https://discordjs.guide/creating-your-bot/command-deployment.html#global-commands
			const data = await rest.put(
				Routes.applicationCommands(c.user.id),
				{ body: client.commands.map(command => command.data.toJSON()) },
			);
			console.log(`Nitty successfully reloaded ${data.length} application (/) commands.`);
		}catch(error){
			console.error(error);
		}
	})();
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(TOKEN);

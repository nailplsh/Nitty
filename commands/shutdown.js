const { SlashCommandBuilder } = require('discord.js');
const { exit } = require('node:process');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shutdown')
		.setDescription('Only the server owner can do this.'),
		async execute(interaction) {
			if (interaction.guild.ownerId !== interaction.member.id) {
				interaction.reply('Sorry, you must be the owner of this server.').then(() => {
					console.log(`${interaction.member.displayName} tried to shut down the bot. ID: ${interaction.user.id}`);
					return;
				});
			} else {
				interaction.reply({
					content: 'Nitty is shutting down.',
					ephemeral: true,
				}).then(() => {
					console.log('Nitty is shutting down.');
					exit(0);
				});
			}
		},
	};
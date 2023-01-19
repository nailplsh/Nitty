const { SlashCommandBuilder } = require('discord.js');
const { exit } = require('node:process');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shutdown')
		.setDescription('Admin Only.'),
		async execute(interaction) {
			if (interaction.user.id != '354414172559114240') {
				interaction.reply('Sorry, you don\'t have access to this feature.').then(() => {
					console.log(`${interaction.member.displayName} tried to shut down the bot. ID: ${interaction.user.id}`);
					return;
				});
			} else {
				interaction.reply('Nitty is shutting down!').then(() => {
					console.log('Nitty is shutting down.');
					exit(0);
				});
			}
		},
	};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ren')
		.setDescription('Infromation related to renvtube.'),
	async execute(interaction) {
		await interaction.reply('Ren - VTuber - 🎮 - https://twitch.tv/renvtube');
	},
};
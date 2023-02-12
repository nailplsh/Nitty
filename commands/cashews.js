const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cashews')
		.setDescription('Information related to cashewsarenice.'),
	async execute(interaction) {
		await interaction.reply('Cashews - Collaborator - https://twitch.tv/cash3wsarenice9982');
	},
};
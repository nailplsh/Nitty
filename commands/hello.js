const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Hello!'),
	async execute(interaction) {
		await interaction.reply('Hello there! I am Nitty, HAZiY\'s utility bot.');
	},
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('haziy')
		.setDescription('Infromation related to HAZiY Live.'),
	async execute(interaction) {
		await interaction.reply('HAZiY was created by hazelnitwit, cashewsarenice, and RenVTube on January 12th, 2023.\nFor more information, visit https://haziy.live or contact Hazel at hazelnitwit#0001.');
	},
};
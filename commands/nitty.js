const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nitty')
		.setDescription('Information related to Nitty.'),
	async execute(interaction) {
		await interaction.reply(`Nitty was made by ${process.env.CREATOR_NAME} for use in Hazel's Hellhole.`);
	},
};
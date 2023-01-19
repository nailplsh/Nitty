const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Tell Nitty to roll you a d20.'),
	async execute(interaction) {
        const d20 = Math.floor(Math.random() * 10) + 1;
		await interaction.reply(`You rolled the number ${d20}.`);
	},
};
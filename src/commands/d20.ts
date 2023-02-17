import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('d20')
        .setDescription('Tell Nitty to roll you a d20.'),
    async execute(interaction: CommandInteraction) {
        const d20 = Math.floor(Math.random() * 10) + 1;
        await interaction.reply({ content: `You rolled the number ${d20}.` });
    },
};
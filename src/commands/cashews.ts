import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cashews')
        .setDescription('Information related to cashewsarenice.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: 'Cashews - Collaborator - https://twitch.tv/cash3wsarenice9982', ephemeral: true });
    },
};
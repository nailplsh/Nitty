import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ren')
        .setDescription('Infromation related to renvtube.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: 'Ren - VTuber - 🎮 - https://twitch.tv/renvtube', ephemeral: true });
    },
};
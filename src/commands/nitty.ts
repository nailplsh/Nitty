import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nitty')
        .setDescription('Information related to Nitty.'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({ content: `Nitty was made by ${process.env.CREATOR_NAME} for use in The Nitwit Lair.` });
    },
};
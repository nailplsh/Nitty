import {CommandInteraction} from "discord.js";
import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar URL of the selected user, or your own avatar.')
        .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
    async execute(interaction: CommandInteraction) {
        const user = interaction.options.getUser('target');

        const embed = new EmbedBuilder()
            .setTitle(`Avatar of **${user ? user.username : interaction.user.username}**`)
            .setColor(0x00AE86)
            .setImage(user ? user.displayAvatarURL({ forceStatic: false }) : interaction.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: "Nitty" });

        return interaction.reply({ embeds: [embed]});
    },
};
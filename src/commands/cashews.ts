import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";


module.exports = {
    data: new SlashCommandBuilder()
        .setName('cashews')
        .setDescription('Sends information about Cashews.'),


    async execute(interaction: CommandInteraction) {

        const embed = new EmbedBuilder()
            .setTitle('Ren')
            .setURL("https://twitch.tv/cash3wsarenice9982")
            .setColor('#b3005a')
            .setDescription(`Cashews is an associated content creator.
            \n**Creator Info**:
            Timezone: America/Toronto (ET)
            \n**My Links**:
            Twitch: https://twitch.tv/cash3wsarenice9982
            **Discord**: cashewsarenice#2700`)
            //.setThumbnail(`https://raw.githubusercontent.com/nitwithazel/Nitty/master/images/ren.png`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
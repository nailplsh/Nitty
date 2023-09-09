import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ren')
        .setDescription('Sends information about Ren.'),


    async execute(interaction: CommandInteraction) {

        const embed = new EmbedBuilder()
            .setTitle('Ren')
            .setURL("https://twitch.tv/renvtube")
            .setColor('#b3005a')
            .setDescription(`Ren is an associated content creator.
            \n**Creator Info**:
            Oshi Mark: 🎮
            Timezone: America/Toronto (ET)
            \n**My Links**:
            Twitter: https://twitter.com/RenRen031917
            Twitch: https://twitch.tv/renvtuber
            **Discord**: renvt`)
            .setThumbnail(`https://raw.githubusercontent.com/nitwithazel/Nitty/master/images/ren.png`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
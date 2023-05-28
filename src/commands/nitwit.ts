import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";
// import requests
import axios from 'axios';

async function getGithubInfos(username: string) {
    return await axios.get(`https://api.github.com/users/${username}`)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nitwit')
        .setDescription('Sends information about Hazel the Nitwit.'),


    async execute(interaction: CommandInteraction) {
        const githubInfos = await getGithubInfos('nitwithazel').then(res => res.data)

        const embed = new EmbedBuilder()
            .setTitle('Hazel the Nitwit')
            .setURL("https://github.com/nitwithazel")
            .setColor('#a8715a')
            .setDescription(`Hazel the Nitwit is a content creator and programmer, and is the original creator of this Bot.
            \n**Creator Info**:
            Fandom Name: Nitwits
            Oshi Mark: 🌰😂🌰
            Timezone: America/Toronto (ET)
            \n**My Links**:
            Twitter: https://twitter.com/nitwithazel
            Twitch: https://twitch.tv/nitwithazel
            VStream: https://vstream.com/c/@hazel
            Other Links: https://nitwithazel.carrd.co
            \n**Github Stats**:
            Public repos: ${githubInfos.public_repos}
            Followers: ${githubInfos.followers}
            \n**Github**: https://github.com/nitwithazel
            **Discord**: nitwit#0001`)
            .setThumbnail(`https://avatars.githubusercontent.com/u/${githubInfos.id}?v=4`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
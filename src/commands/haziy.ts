import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";
// import requests
import axios from 'axios';

async function getGithubInfos(username: string) {
    return await axios.get(`https://api.github.com/users/${username}`)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('haziy')
        .setDescription('Sends information about Nitty\'s creator.'),


    async execute(interaction: CommandInteraction) {
        const githubInfos = await getGithubInfos('hazelnitwit').then(res => res.data)

        const embed = new EmbedBuilder()
            .setTitle('haziy/hazelnitwit')
            .setURL("https://github.com/hazelnitwit")
            .setColor('#a8715a')
            .setDescription(`Haziy is a content creator and developer, and is the original creator of this Bot.
            \n**Content Links**:
            Twitch: https://twitch.tv/hazelnitwit
            Twitter: https://twitter.com/hazelnitwit
            \n**Github Stats**:
            Public repos: ${githubInfos.public_repos}
            Followers: ${githubInfos.followers}
            \n**Github**: https://github.com/hazelnitwit
            **Discord**: haziy#0001`)
            .setThumbnail(`https://avatars.githubusercontent.com/u/${githubInfos.id}?v=4`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
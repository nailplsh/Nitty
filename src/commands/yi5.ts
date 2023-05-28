import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";
// import requests
import axios from 'axios';

async function getGithubInfos(username: string) {
    return await axios.get(`https://api.github.com/users/${username}`)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yi5')
        .setDescription('Sends information about the Yi5'),


    async execute(interaction: CommandInteraction) {
        const githubInfos = await getGithubInfos('0x796935').then(res => res.data)

        const embed = new EmbedBuilder()
            .setTitle('Yi5 aka 0x796935')
            .setURL("https://github.com/0x796935")
            .setColor('#0099ff')
            .setDescription(`Yi5 is a bot developer, and a contributor of this Bot.
            \n**Github Stats**:
            Public repos: ${githubInfos.public_repos}
            Followers: ${githubInfos.followers}
            \n**Github**: https://github.com/0x796935
            **Discord**: yi5#1057`)
            .setThumbnail(`https://avatars.githubusercontent.com/u/${githubInfos.id}?v=4`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
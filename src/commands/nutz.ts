import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nutz')
        .setDescription('Sends information about the Mixed Nutz project.'),

        async execute(interaction: CommandInteraction) {
        const embed = new EmbedBuilder()
            .setTitle('Mixed Nutz')
            .setURL("https://youtube.com/@mixednutz")
            .setColor('#b77039')
            .setDescription(`Mixed Nutz is an upcoming IRL-focused collab project including Nitwit, Cashews and others!
            \n**Member Info**:
            Current Members:
            • Hazelnut (Nitwit)
            • Cashews
            • Peanut
            Timezone: America/Toronto (ET)
            \n**Our Links**:
            YouTube: https://youtube.com/@mixednutz
            Instagram: https://instagram.com/mixe.dnutz
            Other Info: https://mixednutz.carrd.co`)
            .setThumbnail(`https://raw.githubusercontent.com/nitwithazel/Nitty/master/images/mixednutz.png`)

        return await interaction.reply({
            embeds: [embed],
        })
    }
}
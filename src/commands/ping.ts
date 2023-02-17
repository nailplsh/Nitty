import {CommandInteraction, EmbedBuilder, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction: CommandInteraction) {
        // Get ping of discord api
        const ping = interaction.client.ws.ping;

        return await interaction.reply({
            embeds:[
                new EmbedBuilder()
                    .setTitle("Pong!")
                    .setDescription(`Nitty's ping is: ${ping}ms 🏓`)
            ],
            ephemeral: true
        });
    },
};
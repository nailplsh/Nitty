import {CommandInteraction, GuildMember, SlashCommandBuilder} from 'discord.js';
import { exit } from 'node:process';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Only the server owner can do this.'),
    async execute(interaction: CommandInteraction) {
        const member = interaction.member as GuildMember;
        if (interaction.guild?.ownerId !== member.id) {
            interaction.reply({ content: 'Sorry, you must be the owner of this server.', ephemeral: true }).then(() => {
                console.log(`${member.displayName} tried to shut down the bot. ID: ${interaction.user.id}`);
                return;
            });
        } else {
            interaction.reply({
                content: 'Nitty is shutting down.',
                ephemeral: true,
            }).then(() => {
                console.log('Nitty is shutting down.');
                exit(0);
            });
        }
    },
};
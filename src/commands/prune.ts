import {
    CommandInteraction,
    GatewayIntentBits,
    PermissionResolvable,
    PermissionsBitField,
    SlashCommandBuilder,
    TextBasedChannelFields
} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prune')
        .setDescription('Prune up to 99 messages.')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune').setRequired(true)),
    async execute(interaction: CommandInteraction) {
        if(!interaction.channel || interaction.channel.isDMBased())
            return interaction.reply({ content: 'This command can only be used in a server.', ephemeral: true });

        // @ts-ignore
        const amount = interaction.options.getInteger('amount');

        // Check if interaction user has permission to manage messages
        try{
            if (!(interaction.member?.permissions as Readonly<PermissionsBitField>).has(PermissionsBitField.Flags.ManageMessages)) {
                return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
            }
        }catch(error: any){
            console.error(error);
            return interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
        }

        if (amount < 1 || amount > 99)
            return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });

        await (interaction.channel as TextBasedChannelFields)?.bulkDelete(amount, true).catch(error => {
            console.error(error);
            return interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
        });

        return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
    },
};
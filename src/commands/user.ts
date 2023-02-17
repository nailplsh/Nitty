import {CommandInteraction, EmbedAuthorOptions, EmbedBuilder, GuildMember, SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.')
        .addUserOption(option => option.setName('target').setDescription('The user\'s information you want to get')),
    async execute(interaction: CommandInteraction) {
        const member = interaction.member as GuildMember;
        const user = interaction.options.getUser('target') ?? interaction.user;
        const memberTarget = interaction.guild?.members.cache.get(user.id) as GuildMember;

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('User Info')
            .setAuthor({name: user.username, iconURL: user.displayAvatarURL()} as EmbedAuthorOptions)
            .setDescription(`**Username**: ${user.username}\n**ID**: ${user.id}\n**Joined Server**: ${memberTarget.joinedAt}\n**Joined Discord**: ${user.createdAt}\n**Roles**: ${memberTarget.roles.cache.map(role => role.toString()).join(', ')}`)
            .setThumbnail(user.displayAvatarURL({forceStatic: false, size: 512}))
        return await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        })

    },
};
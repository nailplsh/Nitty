///
/// Importing all the dependencies
///
import { GatewayIntentBits } from 'discord.js';
import ClientClass from './structs/clientClass';

/// Clearing the console
console.clear();

///
/// Creating the client
///
const client = new ClientClass({ // create a new discord client
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
    ],
});

export {client};

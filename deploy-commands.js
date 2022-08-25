const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('편집현황').setDescription('편집현황을 말해줍니다.'),
	new SlashCommandBuilder().setName('편집재촉하기').setDescription('편집해달라고 조릅니다.'),
    new SlashCommandBuilder().setName("ping").setDescription("ping")
	
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
// Require the necessary discord.js classes
const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const Hyun = require('./Hyun.json').TextGG;

const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once('ready', () => {
	console.log('Ready!');
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === '편집현황') {
		
        const ewembed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('편집현황')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: '현재 편집 현황', iconURL: 'https://i.ibb.co/6bGGrmP/logo.png', url: 'https://discord.js.org' })
            .setDescription('편집자 상태 : ' + require('./Hyun.json').SangTe)
           .setThumbnail('https://i.ibb.co/6bGGrmP/logo.png')
            .addFields(
            { name: '업무', value: String(require('./Hyun.json').TextGG) },
            { name: '\u200B', value: '\u200B' },
            { name: '현재 일', value: '나도 ㅁ?ㄹ', inline: true },
            { name: '현재시각', value: String(new Date()), inline: true },
            )
           .addFields({ name: '남은시간', value: 'Infinity', inline: true })
           .setImage('https://i.ibb.co/6bGGrmP/logo.png')
           .setTimestamp()
           .setFooter({ text: '참고사항 : 만원당 -30분', iconURL: 'https://i.ibb.co/6bGGrmP/logo.png' });

        interaction.channel.send({ embeds: [ewembed] });

	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

//재촉


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === '편집재촉하기') {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('ㅃㄹ선택하셈')
					.addOptions(
						{
							label: '토스입금하기',
							description: '수수료ㅅㄱ',
							value: 'first_option',
						},
						{
							label: '문화상품권',
							description: '이게짱임ㄷ',
							value: 'second_option',
						},
					),
			);

		await interaction.reply({ content: '시세 : 만원당 편집시간 - 30분', components: [row] });


        
	}
});



client.login(token);
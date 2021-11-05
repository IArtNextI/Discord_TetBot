const auth = require('./auth.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    process_command(msg);
});

let roles = new Map([
    ['Tet', '733343519296716931'],
    ['Old Deus', '733267272436678747'],
    ['Phantasma', '733267711739559936'],
    ['Elemental', '733267844309057546'],
    ['Dragonia', '733267965742415983'],
    ['Gigant', '733268551988936714'],
    ['Flugel', '733268111582822460'],
    ['Elf', '733268677876514817'],
    ['Dwarf', '733268728925388821'],
    ['Fairy', '733268884685324301'],
    ['Ex-Machina', '733340372138197113'],
    ['Demonia', '733340433945722903'],
    ['Dhampir', '733340477105111171'],
    ['Lunamana', '733340534587916369'],
    ['Werebeast', '733340601650643056'],
    ['Seiren', '733340666251182110'],
    ['Imanity', '733340702452482108']
]);

let lroles = [['Tet', '733343519296716931'],['Old Deus', '733267272436678747'],['Phantasma', '733267711739559936'],['Elemental', '733267844309057546'],['Dragonia', '733267965742415983'],['Gigant', '733268551988936714'],['Flugel', '733268111582822460'],['Elf', '733268677876514817'],['Dwarf', '733268728925388821'],['Fairy', '733268884685324301'],['Ex-Machina', '733340372138197113'],['Demonia', '733340433945722903'],['Dhampir', '733340477105111171'],['Lunamana', '733340534587916369'],['Werebeast', '733340601650643056'],['Seiren', '733340666251182110'],['Imanity', '733340702452482108']]

function process_command(msg) {
    // msg - message id
    // msg.content - text
    // msg.channel - channel id
    // msg.channel.name - name of channel
    // channel.send() - sends message to channel
    // msg.guild - server
    // msg.member - user
    // user.roles.add() <- list of role ids / role id
    // user.roles.remove() <- list of role ids / role id
    // user.roles.set() <- list of role ids
    let channel = msg.channel;
    let text = msg.content;
    if (text == "leaderboard" || text == "Leaderboard") {
        return channel.send("Here is Disboard's leaderboard: https://mee6.xyz/leaderboard/733267227146453002");
    }
    if (channel == 733344319766921327) {
        // Someone leveled up
        let tmp = text.split(' ');
        let lvl = tmp[tmp.length - 1].substr(0, tmp[tmp.length - 1].length - 1);
        let user = msg.guild.member(msg.mentions.users.first());
        let alvl = parseInt(lvl);
        alvl = Math.min(alvl, 15);
        let ind = 16 - alvl;
        let roleid = lroles[ind][1];
        return user.roles.add([roleid]).then(() => {
            user.roles.remove([lroles[ind + 1][1]]);
        });
    }
    if (text == "wiki" || text == "Wiki") {
        let wikiEmbed = new Discord.MessageEmbed()
            .setColor('a967b3')
            .setTitle('Frequently used wikis')
//            .setAuthor('Tet', 'https://vignette.wikia.nocookie.net/no-game-no-life/images/b/b1/Scene_of_disboard.png/revision/latest/scale-to-width-down/1366?cb=20140430063733')
//            .setDescription('Some wikis for games')
            .setThumbnail('https://i.ytimg.com/vi/e6uGfsa5wDM/maxresdefault.jpg')
            .addFields(
                { name: 'Dark Souls Wiki (Fandom)', value: '[Wiki](https://darksouls.fandom.com/wiki/Dark_Souls_Wiki)' },
                { name: 'Dark Souls Wiki (Fextralife)', value: '[Wiki](https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki)'},
                { name: 'The Escapists Wiki', value: '[Wiki](https://theescapists.gamepedia.com/The_Escapists_Wiki)'},
                { name: 'Terraria Wiki (Fandom)', value: '[Wiki](https://terraria.fandom.com/wiki/Terraria_Wiki)'},
                { name: 'Terraria Wiki (Gamepedia)', value: '[Wiki](https://terraria.gamepedia.com/Terraria_Wiki)'}
            )
//            .setTimestamp()
//            .setFooter('This embed was created ', 'https://vignette.wikia.nocookie.net/no-game-no-life/images/b/b1/Scene_of_disboard.png/revision/latest/scale-to-width-down/1366?cb=20140430063733');
        return msg.channel.send(wikiEmbed);
    }
}

client.login(auth.token);
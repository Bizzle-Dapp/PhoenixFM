
function skip(message, serverQueue) {
    try{
        console.log(serverQueue);
        if (!message.member.voice.channel) {
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        }
        if (!serverQueue) {
            return message.channel.send("There is no song that I could skip!");
        }

        serverQueue.connection.dispatcher.end();
    } catch (e) {
        return message.channel.send(`Woah now! Error was this: ${e.message}`);
    }
    
}

module.exports = skip;
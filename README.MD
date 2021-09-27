# A very simple music bot
PhoenixFM, risen from the ashes.

This little bird will listen for tracks in a Discord room you allocate him.

Setup is reasonably straight forward. All you need is to allocate a bot to your server with the correct permissions - allocate Phoenix that token and he'll listen for music requests.

Follow the steps below and you'll be vibing to Jeremy Soule playing games with your homies in no time...

1) Head to the developer dashboard of Discord: https://discord.com/developers/applications
2) Create a "New Application".
3) Name it, give it some style (a picture, name, description).
4) Head to the OAuth2 tab - within scopes, select "Bot", "applications.commands". Below, within _Bot Permissions_ select "Send Messages", "Manage Messages", "Connect", "Speak", "Use Voice Activity".
5) Copy the URL that has been generated, paste it in a browser, sign into Discord and add the bot to your server.
6) Head to the Bot tab, and create the bot. Give him an Icon and a Username. The `Token` is what you need from here.
7) Clone this repo, create a `.env.local` file at the root of the repository.
8) Inside your `.env.local` add a line: `TOKEN = <YOURTOKENHERE>`. See two steps above!
9) Be sure to run `npm i` in the directory from the terminal to install all dependencies
10) Save everything.
11) Open the terminal in your directory. Type `node index.js` to start Phoenix. You should see "Ready" in the terminal output.
12) If your Token's reference has authenticated, and your bot is in your server, it'll be listening...
13) Pop Harvest Dawn by Jeremy Soule on. It's a classic.

## Commands:
`!play` _Some YouTube Link_ : Plays a track

`!stop` : Stops the queue.

`!skip` : Skips the current track.

## Many thanks to Gabriel Tanner:
https://gabrieltanner.org/blog/dicord-music-bot

A huge leg up with getting this running for the Discord, top score.

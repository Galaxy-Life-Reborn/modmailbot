# 🧩 Stats plugin


## Specify plugins to load
The plugin consists of two separate files:
```ini
# Main file
plugins[] = ./src/plugins/moderatorStats.js
```

## Configure needed values
You need to give the plugin the ID of a channel in which the commands can be executed. Furthermore, you CAN make the bot use images in the embed messages
```ini
# required
statChannelId = {ID of the channel wherein the stats command should be able to be executed}
# optional
statSuccessEmbedImageUrl = https://cdn.discordapp.com/attachments/778728888602722346/779014008954552410/Starling_Scientist.png
statFailedEmbedImageUrl = https://cdn.discordapp.com/attachments/778728888602722346/779013987990765608/Oopsies.png
```

## Using the plugin
**Please backup your data.sqlite before using this plugin!**

### Initial setup
On the first run after installing this plugin, the bot should run a database migration on startup.

### Commands
After these steps, you can use the commands `!stats <userId>` and `!stats total` on the inbox-server. The bot will then send the stats of the given moderator or the total stats in the same channel.

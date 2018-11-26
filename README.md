
# Hearthstone Graveyard Tracker

This is the beginning of an add-on for Blizzard's Hearthstone to display the cards in your graveyard for summoning via resurrect spells. It works by reading the logs generated by Hearthstone game client.

## Usage

> npm install && npm start

## Troubleshooting

### No logs?

(How to enable logging)[https://github.com/jleclanche/fireplace/wiki/How-to-enable-logging]

```
[LoadingScreen]
LogLevel=1
FilePrinting=false
ConsolePrinting=true
ScreenPrinting=false

[Zone]
LogLevel=1
FilePrinting=false
ConsolePrinting=true
ScreenPrinting=false

[Asset]
LogLevel=1
ConsolePrinting=true

[Bob]
LogLevel=1
ConsolePrinting=true

[Power]
LogLevel=1
ConsolePrinting=true
```

Debug mode

> DEBUG=* node index.js

## Planned

* Putting this in a window and not command line

## Credits

 (https://github.com/gregstewart/farseer/)[https://github.com/gregstewart/farseer/]
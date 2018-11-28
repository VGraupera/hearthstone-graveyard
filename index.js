const Farseer = require('farseer').default;
const farseer = new Farseer();

farseer.on('game-start', (data) => {
    console.log('Game started');
    console.log(data);
});

farseer.on('game-over', (data) => {
    console.log('Game over\n');
    // console.log(data);
});

farseer.on('zone-change', (data) => {
  if ((data.toZone === 'GRAVEYARD')
    && (data.fromTeam === 'FRIENDLY')
    && (data.fromZone === 'PLAY')) {
    // console.log(data);
    console.log(data.cardName);
  }
});

farseer.start();

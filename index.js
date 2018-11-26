const Farseer = require('farseer').default;
const farseer = new Farseer();

farseer.on('game-start', (data) => {
    console.log('Game started');
    // console.log(data);
});

farseer.on('game-over', (data) => {
    console.log('Game over\n');
    // console.log(data);
});

farseer.on('zone-change', (data) => {
  if ((data.toZone === 'GRAVEYARD') && (data.fromTeam === 'FRIENDLY')) {
    console.log(data.cardName);
  }
  // console.log(data);
});

farseer.start();

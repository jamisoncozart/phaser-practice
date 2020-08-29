import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import playGame from './phaser/scene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 200 }
    }
  },
  scene: playGame
};

var game = new Phaser.Game(config);

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement("div")
);

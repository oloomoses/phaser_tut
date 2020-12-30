import MainScene from './mainScene'

const config = {
  width: 750,
  height: 300,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'index',
  scale: {
    zoom: 2,
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  },

  scene: [ MainScene ]

}

export { config as default }
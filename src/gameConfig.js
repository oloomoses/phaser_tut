const config = {
  width: 500,
  height: 500,
  backgroundColor: '#333333',
  type: phaser.AUTO,
  parent: 'game',
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

  scene: []

}
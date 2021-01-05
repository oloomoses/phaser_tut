import MainScene from './mainScene'
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";

const config = {
  width: 600,
  height: 500,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'index',
  scale: {
    zoom: 2,
  },

  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: { y: 0 }
    }
  },

  scene: [ MainScene ],
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }

}

export { config as default }
import Player from './player';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload(){
    this.load.image('cat-like', 'assets/cat-like-creature.png');
    this.load.image('tiles', 'assets/road.png');
    this.load.tilemapTiledJSON('map', 'assets/map.json');
  }

  create(){
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('road', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0)
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);

    layer1.setCollisionByProperty({ collides: true });
    this.matter.world.convertTilemapLayer(layer1);
    this.player = new Player({scene: this, x: 100, y: 450, sprite: 'cat-like'})

   
    // this.player.speed = 5;
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    })
    
  }

  update() {
    this.player.update()
  }
}

export { MainScene as default }
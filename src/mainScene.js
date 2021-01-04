import Player from './player';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload(){
    this.load.image('cat-like', 'assets/cat-like-creature.png')
  }

  create(){
    console.log('create')
    this.player = new Player({scene: this, x: 0, y: 0, sprite: 'cat-like'})
  
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
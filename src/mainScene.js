class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload(){
    this.load.image('cat-like', 'assets/cat-like-creature.png')
  }

  create(){
    console.log('create')
    this.cat = this.physics.add.sprite(10, 10, 'cat-like');
    this.cat.body.setAllowGravity(false);
    this.cat.setScale(0.2);
    this.catSpeed = 300;
    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    })
    
  }

  update() {
    let velocity = new Phaser.Math.Vector2();
    if(this.inputKeys.left.isDown) {
      velocity.x = -1;
    } else if(this.inputKeys.right.isDown) {
      velocity.x = 1
    }

    if(this.inputKeys.up.isDown) {
      velocity.y = -1;
    } else if(this.inputKeys.down.isDown) {
      velocity.y = 1
    }

    velocity.scale(this.catSpeed);
    this.cat.setVelocity(velocity.x, velocity.y)
  }
}

export { MainScene as default }
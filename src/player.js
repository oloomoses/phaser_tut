class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, sprite } = data;
    super(scene.matter.world, x, y, sprite);
    scene.add.existing(this);
    this.speed = 5
    this.setScale(0.2);
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

    velocity.scale(this.speed);
    this.setVelocity(velocity.x, velocity.y)
  }
}

export { Player as default }
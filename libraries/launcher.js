class Launcher {
  constructor(body, pointB) {
    var options = {
      bodyA: body,
      pointB: pointB,
      stiffness: 0.004,
      length: 10
    }
    this.bodyA = body
    this.pointB = pointB
    this.launcher = Constraint.create(options)
    World.add(world, this.launcher)
  }
  fly() {
    this.launcher.bodyA = null
  }

  attach(body) {
    this.launcher.bodyA = body
  }

  display() {
    if (this.launcher.bodyA) {
      var pointA = this.launcher.bodyA.position
      var pointB = this.pointB
      stroke(48, 22, 8)
      strokeWeight(6)
      line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
  }
}

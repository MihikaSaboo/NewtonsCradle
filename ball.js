class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution:0.9,
      }
      this.body = Bodies.circle(x,y,radius,options);
     this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  };

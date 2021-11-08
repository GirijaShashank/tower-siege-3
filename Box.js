class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.1
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      if((this.body.speed)<5){
            
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
          }else
          {
          World.remove(world,this.body)  
          push();
          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity)
          rect(999, 999, this.width, this.height);
          pop();
                    }

    }
  }
  
class Log  extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);
      
    }

    
  };

//inheritance
//Parent class/ base-class
//child class/ sub-class
//child class inherits all the properties and function from the parent class
//BaseClass
//pig, bird, log, box

  
class Ground {

// properties
constructor(x,y,width,height){
    var options={

        isStatic: true
      
      }
      
      this.body=Bodies.rectangle(200,390,400,20,options);
      this.width=width;
        this.height=height;
      World.add(world,this.body);
      
}



display(){
    var pos = this.body.position;
    rectMode (CENTER);
    fill ("brown");
    rect (pos.x, pos.y,this.width,this.height);

}




}
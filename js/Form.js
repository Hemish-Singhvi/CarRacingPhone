class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    //this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    background(0);
    image(startBG, 0, 0, windowWidth, windowHeight);

    this.input.position(windowWidth/2 - 40 , windowHeight/2 - 80);
    this.button.position(windowWidth/2 + 30, windowHeight/2);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      background(0);
      image(greetingBG, 0, 0, windowWidth, windowHeight);
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(windowWidth/2 - 45, windowHeight/2 - 20);
    });
  }
}

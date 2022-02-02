class Form {
  constructor() {
   this.input = createInput("Name");
   this.email = createEmail("Name");
   this.button = createButton('Play');            
   this.greeting = createElement('h3');
   this.text = createElement('h2',"LET US DO A SURVERY");
   this.text1 = createElement('h2',"What are ur opinions or bringing more free periods");
   this.radio = createRadio('h2');
   this.radio.option('YES');
   this.radio.option('NO');
   this.text2 = createElement('h2',"What are ur opinions ON REPLACING THE OLD TEACHERS WITH NEW ONES");
   this.radio1 = createRadio('h2');
   this.radio1.option('YES')
   this.radio1.option('NO')
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    
    this.input.position(570,255);
    this.email.position(570,165);
    this.button.position(600,600);
    this.greeting.position(500,105);
    this.text.position(500,005);
    this.text2.position(500,400);
    this.text3.position(500,300);

    button.mousePressed(function(){
  

      var name = input.value();
      

       
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}

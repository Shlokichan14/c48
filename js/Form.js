class Form{
    constructor(){
        //this.input = createInput("").attribute("placeholder", "Enter Your Name");
        //this.button = createButton("Play");
        //this.titleImg = createImg("","game title");
        this.greeting = createElement("h2");
        this.button1 = createImg("images/harryimg.png");
        this.button2 = createImg("images/voldemortimg.png");
    }

    setElementsPosition(){
        //this.titleImg.position(120,50);
        //this.input.position(width/2-100,height/2-80);
        //this.button.position(width/2-80,height/2-20);
        this.greeting.position(width/2-300, height/2-100);
        this.button1.position(width/2-130,height/2-120);
        this.button2.position(width/2-100,height/2-50);
    }

    setElementStyle(){
        //this.input.class("customInput");
        //this.button.class("customButton");
        this.greeting.class("greeting");
        //this.titleImg.class("gameTitle");
        this.button1.class("gameTitle2");
        this.button2.class("gameTitle2");
    }

    display(){
       this.setElementsPosition();
       this.setElementStyle();
    }
    handleMousePressed(){
        this.button1.mousePressed(()=>{
            this.button1.hide();
            var message = "Hello "+ player.name;
            this.greetimg.html(message);
        })
    }
}
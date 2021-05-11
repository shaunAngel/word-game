class Form{
    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Enter your name here");
        this.button = createButton("submit");
        this.question = createElement('h3');
        this.input2 = createInput("enter the word here");

    }
    hide(){
        this.title.hide();
        this.button.hide();
        this.input1.hide();
    }
    display(){
        this.title.html("WORD-BUILDING-GAME");
        this.title.position(500,0);
        this.input1.position(800,10);
        this.input2.position(1000,20);
        this.button.position(600,30);
        this.question.position(100,50);
    }

}
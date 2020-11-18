Experigen.initialize = function () {

	var items  = this.resource("items");	
	var sounds = this.resource("sounds"); 
	var pictures = this.resource("pictures");

var train = []
	.concat(items.subset("type","train"))
	.shuffle()
	.pairWith('stressedfirst',[true,false])
	.shuffle()
	.pairWith('view','training.ejs')
	;

var test = []
	.concat(items.subset("type","test"))
	.shuffle()
	.pairWith('stressedfirst',[true,false])
	.shuffle()
	.pairWith('view','testing.ejs')
	;
			
	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("intro2.ejs");
	this.addBlock(train);
	this.addStaticScreen("getgoing.ejs");
	this.addBlock(test);
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("paycode.ejs");

}	
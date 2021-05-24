// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza,
// but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

//pizzaOven should have crustyype, saucetype, cheeses and toppings


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crusttype = crustType;
    pizza.saucetype = sauceType;
    pizza.cheeses = cheeses
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["peperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("New York-style", "Marinara", ["Provolone"], ["peperoni", "bacon", "olives"]);
console.log(p3);

var p4 = pizzaOven("Stuffed", "white garlic", ["gorgonzola"], ["pineapple", "ham", "olives"]);
console.log(p4);



// Random pizza
// function randomPizzaOven(crustType, sauceType, cheeses, toppings) {

function randomCrust(){
    var rCrust=["deep dish", "hand tossed", "New York-style", "Stuffed"]
    var rc = Math.floor(Math.random()* rCrust.length)
console.log(rc)
    var randomcrustoutput= rCrust [rc]
    console.log(randomcrustoutput)
    return randomcrustoutput
}

function randomSauce(){
    var rSauce=["traditional", "Marinara" ,"White Garlic"]
    var rS = Math.floor(Math.random()* rSauce.length)
console.log(rS)
    var randomSauceOutput= rSauce [rS]
    console.log(randomSauceOutput)
    return randomSauceOutput
}

function randomCheese(){
    var rCheese=["mozzarella", "Feta", "Provolone", "Gargonzola"]
    var rC = Math.floor(Math.random()* rCheese.length)
console.log(rC)
    var randomCheeseOutput= rCheese [rC]
    console.log(randomCheeseOutput)
    return randomCheeseOutput
}

function randomTop(){
    var rTop=["peperoni", "bacon", "olives", "mushrooms", "onions", "pineapple", "ham"]
    var rT = Math.floor(Math.random()* rTop.length)
console.log(rT)
    var randomTopOutput= rTop [rT]
    console.log(randomTopOutput)
    return randomTopOutput
}
    function rp(){
    var randomPizza = {};
    randomPizza.crustType = randomCrust ()
    randomPizza.sauceType = randomSauce ()
    randomPizza.cheeses = randomCheese ()
    randomPizza.toppings = randomTop ()
    
    return randomPizza;
}
console.log(rp())
//}


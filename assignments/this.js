/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the value of "this" is the window Object (defaults to this when not specified)
* 2. Implicit binding is when the object to the left of the dot gets "this" because it was called by a preceding dot.
* 3. New binding is when a constructor function is used, which makes "this" refer to the object that is created and returned
* 4. Explicit binding happens when call or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const Implicit = {
    difficulty: "hard",
    code: "javascript",
    saying () {
        return `${this.code} is ${this.difficulty}.`;
    }
};

console.log(Implicit.saying());

// Principle 3

// code example for New Binding
function Hungry(name, food) {
    this.name = name
    this.food = food
    this.eat = function() {
        console.log(`${this.name} loves to eat ${this.food}`)
    }
}

const aust = new Hungry('Austin', 'ice cream')
aust.eat()


// Principle 4

// code example for Explicit Binding
const speakName = function() {
    console.log(`My name is ${this.name}!`)
}
const austin = {
    name: "Austin"
};

speakName.call(austin);

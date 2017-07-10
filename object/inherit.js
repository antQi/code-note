/**
 * 对象继承
 */

function Animals(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log('Hi World! My name is ' + this.name);
    }
}

function Person(name, age) {
    Animals.call(this, name, age);
}

// Person.prototype = Animals.prototype;
// Person.prototype = new Animals();
// Person.prototype = Object.create(Animals.prototype)

var p1 = new Person('p1', 10);
var p2 = new Person('p2', 20);

p1.say()
p2.say()
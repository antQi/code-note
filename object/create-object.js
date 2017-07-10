/**
 * javascript 创建对象
 */

// 对象直接量
var Man = {
    name: null,
    age: 0,
    sleep: function() {
        console.log(this.name, 'is sleepping')
    }
}

// new Object() 构造函数
var person1 = new Object();
person1.name = 'Lily';
person1.age = '18';
person1.work = function() {
    console.log('I’m a coder')
}

// 对象模版法，构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.intru = function() {
        console.log('My Name Is ' + this.name);
    }
}

var person2 = new Person('Tom', 20);
var person3 = new Person('Tom2', 23);
var person4 = new Person('Tom3', 24);
var person5 = new Person('Tom4', 25);


// Object.create()
function A(name) {
    Person.call(this, name)
}
A.prototype = Object.create(Person.prototype);

console.log(A)

var a = new A('cat');
a.intru();

var p6 = new Person()
var p7 = new Person()
console.log(p6.name, p7.name)
p6.name = 'p6'
p7.name = p6.name
console.log(p6.name, p7.name)
p7.name = 'p7'

console.log(p6.name, p7.name)


for (let i = 0; i < [1, 2, 3, 4, 5].length; i++) {
    setTimeout(function() {
        console.log(i)
    }, 0);
}
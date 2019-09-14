
//3
// function run(cb){
//     console.log('run ...')
//     cb();
// }
// var mouse = {
//     name: 'mickey',
//     sayHi: function (){
//         console.log(this.name);
//     }
// };
// run(mouse.sayHi.bind(mouse));

//4
// var arr=[1, 2, 3];
// arr.map(x => x*x);

//6
// function greeting(name){
//     return 'hi, '+ name ;
// }
// function greeting2(name){
//     return`hi, ${name}`
// }
// var result= greeting2('tram');
// console.log(result);

//7
// function sum(){
//     const numbers = Array.from(arguments);
//     return numbers.reduce(function(sum,num){
//         return sum+num;
//     },0)
// }
// sum(1,2,3,4,5,6,7,7,8)

//8
// function greeting(name='friend', language ='ja'){
//     if(language === 'en'){
//         return `hi, ${name}`;
//     }
//     if (language ===' en'){
// return `konnichiwa , ${name}`;
//     }
//     return 'chao ban';
// }
// greeting();

//9
// function greeting(){
//     console.log(`hi, ${this.namw}. i am ${this.age}`)
// }
// const cat ={
//     name :'tom',
//     age: '100'
// };
// greeting.call(cat);

//10
// function sum(){
//     const numbers = Array.from(arguments);
//     return numbers.reduce((sum, num) =>sum +num,0)
// }
// function average(){
//     const x= sum.apply(null, arguments);
//     return x/arguments.length;
// }
// average( 1,2,3 ,5);

//11
// const anme ='Tom';
// const cat= {
//     name,
//     run(){
//         console.log(`${this.name} is running`);
//     }
// };
// cat.run();

//12
// class Mouse {
//     constructor(name){
//         this.name = name;
//     }
//     run(){
//         console.log(`${this.name} is runing`);
//     }}
//     const mouse= new mouse('mickey');
//     mouse.run();

//13
// function Animal(name){
//     this.name =name;
// }
// Animal.prototype.eat = function(){
//     console.log('Eating');
// }
// function Bird(name){
//     Animal.apply(this, arguments);
// }
// Bird.prototype = new Animal();

//14
// class CoffeeMachine{
//     makeCoffee(){
//         console.log('making coffee...');
//     }
// }
// class SpecialCoffeeMachine extends CoffeeMachine{
//     makeCoffee(cb){
//         console.log('making coffee and do something...');
// cb();
//     }
// }
// const CoffeeMachine = new SpecialCoffeeMachine();
// CoffeeMachine.makeCoffee(function(){
//     console.log('call the boss')
// })

//15
// class Hero {
//     constructor(name, hp, damage){
//         this.name= name;
//         this.hp= hp;
//         this.damage= damage;
//     }
    
//     applyDamage(damage){
//         this.hp -= damage;

//     }
//     attrack(enemy){
//         enemy.applyDamage(this.damage);
//     }
// }
// class RangeHero extends Hero {
//     constructor(name, hp, damage, range){
//         super(name, hp, damage);
//         this.range =range;
//     }
//     attrack(enemy){
//         super.attrack(enemy);
//         this.hp += this.damage;
//     }
// }
// const heroA = new RangeHero ('A', 100, 10);
// const heroB = new Hero('B', 200, 5);
// console.log({heroA, heroB});
// heroA.attrack(heroB);
// console.log({heroA, heroB});

//16
// class Foo{
//     static someMethod(){
//         console.log('some method');
//     }
//     anotherMethod(){
//         console.log('another method');
        
//     }
// }

//17
// function concat(separator, ...strings){
//     return strings.join(separator);
// }
// concat('.', 'a', 'b', 'c');

//18
// const a=[ 1, 2, 3];
// function sum(...numbers){

// }
// sum(...a);

//19
// let a1=1;
// let a2=1;
// console.log(a1===a2);

// let obj1= {a:1};
// let obj2={ a:1};
// console.log(obj1 === obj2);

// let a3 =a2;
// console.log(a3 === a2);
// a3 =2;
// console.log(ojb3 ===obj2);

//20
// const a=[ 1, 2, 3];
// const b=[0, ...a,4];
// console.log(b);
// const obj1 ={
//     a:1,
//     b:2,
//     c:3,
//     d:{e :10}

// }
// let ojb2 ={
//     ...obj1,
//     z: 1000
// };
// console.log({obj1, ojb2})

//21
// function debug(name){
//     return function(str){
//         console.log(`[${name} ${str}]`);
//     }
// }
// const log = debug('Mouse');
// log('error happend')

//22
// function waitAndRun(ms, func){
//     setTimeout(func, ms);
// }
// function run(){
//     console.log('run');
// }
// waitAndRun(2000, run);

//23
const obj= {
    a:1,
    b:2,
    c:3
}
const {a, ...c} =obj;
console.log(a, c);
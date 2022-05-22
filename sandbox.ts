// let a: string;
// let b: number;
// let c: boolean;
// let d: any;
// a = "Hello";
// b = 10;
// c = true;
// d = 'new';
// console.log(a, b, c,d);

// let a : Array<number> = [1,2,3,4,5,6,7,8,9,10];

// let langs : string[];
// let numbers : number[];
// let booleanValue : Array<boolean>;

// langs = ["php","java","js"];
// numbers = [1,2,3,4,5];
// booleanValue = [true,true];
// console.log(...langs);
// console.log(...numbers);
// console.log(...booleanValue);
// console.log(...a);

// ? optional deyerdir yeni deyerin verileceyi deqiq deyise istifade edilir
// function addNumbers(num1:number,num2?:number) :number {
    //     if (typeof num2 === 'undefined') {
        //         return num1
        //     }
        //     return  num1+num2;
// }

// console.log(addNumbers(10));




// void -> funksiyada islenen zaman hemin funksiyada return etmek olmaz
// function addNumbers(num1:number,num2:number) :void {
//   console.log(num1+num2);
//   return ; // bu formada islenen zaman funksiyani tez sonlandirmaq ucundur
// }
// addNumbers(10,20);

// class Person {
//     // private name:string;
//     // private age:number;
//     // private phone:string;
//      name:string;
//      age:number;
//      phone:string;

//     constructor(name:string,age:number,phone:string){
//         this.name = name;
//         this.age = age;
//         this.phone = phone;

//         console.log('add user');
        
//     }
//     showInfos(){
//         console.log(`Name: ${this.name} Age: ${this.age} Phone:${this.phone}`);
        
//     }

// }
// class Empolyee extends Person{
//     salary:number;

//     constructor(name:string,age:number,phone:string,salary:number){
//         super(name,age,phone);
//             this.salary = salary;
//     }
//     showInfos() {
//         super.showInfos();
//         console.log("Salary:" + this.salary);
        
//     }
//     changeDepatment(){
//         console.log('new Department');
        
//     }
// }


// let empolyee1 = new Empolyee("Hasan Bakhtiar",25,'1234567890',500);
// empolyee1.showInfos();
// empolyee1.changeDepatment();

// let person1 = new Person("Hasan Bakhtiar",25,'1234567890');

// person1.showInfos();

// console.log(person1.name);


// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add() {
//         console.log("MySql add data ");
        
//     }
//     get(){
//         console.log("MySql get data");

//     }
//     delete(){
//         console.log("MySql delete data");

//     }
//     update(){
//         console.log("MySql update data");
        
//     }
// }

// let mysql = new MySql();

// mysql





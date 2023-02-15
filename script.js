// // ==================task_1===============
// class Plane {
//     constructor(planeName, isFlying = false) {
//         this.name = planeName;
//         this.isFlying = isFlying;
//     }
//
//     takeOff () {
//         console.log(`${this.name} in the sky`);
//         this.isFlying = true;
//     }
//
//     land() {
//         console.log(`${this.name} stay in airport`);
//         this.isFlying = false;
//     }
// }
//
// let airport = {
//     planes: [],
//     getFlyingPlanes() {
//         let flyingPlanes = [];
//         this.planes.forEach(elements => {
//             if (elements.isFlying === true) {
//                 flyingPlanes.push(elements);
//             }
//
//         });
//
//         return flyingPlanes.length;
//     }

// }
//
// let plane1 = new Plane("AH-225");
// let plane2 = new Plane("Ty-334");
// let plane3 = new Plane("Cy-25");
// let plane4 = new Plane("Cy-25M1");
// let plane5 = new Plane("Boeing-747");
//
// plane1.takeOff();
// plane2.takeOff();
// plane4.takeOff();
//
// airport.planes.push(plane1, plane2, plane3, plane4, plane5);
// console.log(airport.planes)
// console.log(airport.getFlyingPlanes());
//
// function onClickHandlerBtn(event) {
//     airport.planes.forEach(element => {
//         if (element.isFlying === false) {
//             element.takeOff()
//         } else {
//             element.land();
//         }
//
//         document.querySelector('span').textContent = `flying planes: ${airport.getFlyingPlanes()}`
//     })
// }
//
//
// // ==================task_2===============
//
//
// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     getFullName() {
//         return `${this.name}, ${this.surname}`
//     }
// }
//
// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//
//     getCourse() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }
// }
//
//
// let student1 = new Student('Boris','Jhonsonuk', 2021)
//
// console.log(student1.getFullName());
// console.log(student1.getCourse());

// ==================task_1===============
function Plane (planeName, isFlying = false) {
        this.name = planeName;
        this.isFlying = isFlying;

    this.takeOff = function() {
        console.log(`${this.name} in the sky`);
        this.isFlying = true;
    }

    this.land = function() {
        console.log(`${this.name} stay in airport`);
        this.isFlying = false;
    }
}

let airport = {
    planes: [],
    getFlyingPlanes() {
        let flyingPlanes = [];
        this.planes.forEach(elements => {
            if (elements.isFlying === true) {
                flyingPlanes.push(elements);
            }

        });

        return flyingPlanes.length;
    }

}

let plane1 = new Plane("AH-225");
let plane2 = new Plane("Ty-334");
let plane3 = new Plane("Cy-25");
let plane4 = new Plane("Cy-25M1");
let plane5 = new Plane("Boeing-747");

plane1.takeOff();
plane2.takeOff();
plane4.takeOff();

airport.planes.push(plane1, plane2, plane3, plane4, plane5);
console.log(airport.planes)
console.log(airport.getFlyingPlanes());

function onClickHandlerBtn(event) {
    airport.planes.forEach(element => {
        if (element.isFlying === false) {
            element.takeOff()
        } else {
            element.land();
        }

        document.querySelector('span').textContent = `flying planes: ${airport.getFlyingPlanes()}`
    })
}

// ==================task_2===============

function User (name, surname) {
    this.name = name;
    this.surname = surname;


    this.getFullName  = function () {
        return `${this.name}, ${this.surname}`
    }
}

let user = new User('Boris','Jhonsonuk')

function Student (name, surname, year) {
    this.getCourse = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - year;
    }
}

let student = new Student('Boris','Jhonsonuk', 2019);
student.__proto__ = user;
console.log(student.getFullName());
console.log(student.getCourse());


//================task_3===================

String.prototype.countAllUpperCase = function () {
     return this.match(/[A-Z, А-Я]/g).length
}

const someString = 'ФФФааВВвыафыв2342323JUHGbbbggftrYGHHYUU'

console.log(someString.countAllUpperCase());
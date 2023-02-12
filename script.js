// ==================task_1===============
class Plane {
    constructor(planeName, isFlying = false) {
        this.name = planeName;
        this.isFlying = isFlying;
    }

    takeOff () {
        console.log(`${this.name} in the sky`);
        this.isFlying = true;
    }

    land() {
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


class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name}, ${this.surname}`
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}


let student1 = new Student('Boris','Jhonsonuk', 2021)

console.log(student1.getFullName());
console.log(student1.getCourse());
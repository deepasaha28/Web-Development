//let obj = {
//    a:1,
//    b:"Deepa"
//}
//console.log(obj)

//let animal = {
//    eats:true
//};
//let rabbit = {
//    jumps:true
//};
//rabbit._proto_=animal;//sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Khachiiii...")
    }

    jumps() {
        console.log("Jachiiii...")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Manghsho Khachiiii... ")//Method overriding
    }

}

let a = new Animal("JK");
console.log(a)

let l = new Lion("Shera");
console.log(l)



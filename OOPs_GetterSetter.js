class user {
    constructor(name){
        this.name = name;//invokes the setter
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short")
            return;
        }
        this._name = value;
    }
}

let a = new user("Deepa")
console.log(a.name); //John

a.name = "Mouni" //Name is too short
console.log(a.name)
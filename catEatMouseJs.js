class Cat {
    name_cat;
    weight_cat;

    constructor(name, weight,) {
        this.name_cat = name;
        this.weight_cat = weight;

    }

    getInfo() {
        return console.log("Name: " + this.name_cat + " - " + "Weight: " + this.weight_cat + "kg")
    }

    eatMouse(mouse) {
        this.weight_cat++;
        mouse.hp_mouse -= 10;
        this.getInfo();
        mouse.getInfo();
        mouse.isDead()
    }

}

class Rat {
    name_mouse;
    hp_mouse;

    constructor(name, hp) {
        this.name_mouse = name;
        this.hp_mouse = hp;
    }

    getInfo() {
        return console.log("Name: " + this.name_mouse + " - " + "HP: " + this.hp_mouse + "hp");
    }

    isDead() {
        if (this.hp_mouse <= 5) console.log("Status: chuot chet")
        else console.log("Status: chuot song")
    }

}

let cat = new Cat("meo", 30)
let mouse = new Rat("chuot", 20)
cat.getInfo();
mouse.getInfo();
console.log("-------------------");
cat.eatMouse(mouse);
cat.eatMouse(mouse);

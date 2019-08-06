class GrandFather {
    constructor(secondName) {
        this.secondName = secondName;
    }
}

class Father extends GrandFather {
     constructor(secondName, profession = 'Teacher') {
        super(secondName);
        this.profession = profession;
     }
}

class Son extends Father {
    constructor() {
        super('Silva', 'Driver');
    }
}

const son = new Son;
console.log(son);
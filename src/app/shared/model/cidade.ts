export class Cidade {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    get cityName() {
        return this.name;
    }

    set cityName(name){
        this.name = name;
    }

}
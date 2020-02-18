export class Estado {

    private name: string;
    private initials: string;

    constructor(name: string, initials: string){
        this.name = name;
        this.initials = initials;
    }

    getStateName() {
        return this.name;
    }

    setStateName(name) {
        this.name = name;
    }

    getStateInitials() {
        return this.initials;
    }

    setStateInitials(initials) {
        this.initials = initials;
    }

}
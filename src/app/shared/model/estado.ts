export class Estado {
    private name: string;
    private initials: string;

    constructor(name: string, initials: string){
        this.name = name;
        this.initials = initials;
    }

    get stateName() {
        return this.name;
    }

    set stateName(name) {
        this.name = name;
    }

    get stateInitials() {
        return this.initials;
    }

    set stateInitials(initials) {
        this.initials = initials;
    }


}
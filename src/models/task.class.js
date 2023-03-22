import { LEVELS } from "./levels.enum";

export class Task {
    name='Esther';
    lastname='Romana';
    email='licenciado@gmail.com';
    connected=false;
    description='';
    completed=false;
    level=LEVELS.NORMAL;

    constructor(name,lastname,email,connected,description,completed,level){
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.connected=connected;
        this.description=description;
        this.completed=completed;
        this.level=level
    }


}
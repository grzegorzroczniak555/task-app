import { Status } from './status';

export class Task {
    status: Status;

    constructor(public name: string,
                public description: string) {
                this.status = Status.IN_PROGRESS;
        }
                public id?: number;
}



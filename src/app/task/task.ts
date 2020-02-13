import { Status } from './status'

export class Task {
    status: Status;

    constructor(public id: number,
                public name: string,
                public description: string) {
                this.status = Status.IN_PROGRESS;
        }
}



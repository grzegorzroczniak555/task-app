enum Status {
    IN_PROGRESS,
    DONE,
}

export class Task {
    status: Status;

    constructor(public id: number,
                public name: string,
                public description: string) {
                this.status = Status.IN_PROGRESS;
        }
}



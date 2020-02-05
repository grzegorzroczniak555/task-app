enum Status {
    IN_PROGRESS,
    DONE,
}

export class Task {
    id: number;
    name: string;
    description: string;
    status: Status;
}

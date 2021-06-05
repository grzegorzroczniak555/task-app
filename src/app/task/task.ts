import { Status } from './status';

export class Task {
  id: number;
  status: Status;

  constructor(public name: string,
              public description: string) {
    this.status = Status.IN_PROGRESS;
  }

}



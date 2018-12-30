import {Observable, of} from 'rxjs';

export class App {
    constructor() {
    }

    get sayHello():Observable<string> {
        return of("hello");
    }
}
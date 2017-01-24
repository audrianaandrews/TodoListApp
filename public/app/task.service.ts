import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Task } from './task';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
     constructor (private http: Http) {}
     private tasksUrl = 'api/tasks';

     // Get all tasks from the database
     getTasks() {

     return this.http.get(this.tasksUrl)
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

 }

     // Add a new task
    addTask (body: any) {
        let bodyString = JSON.stringify(body.value);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });

        return this.http.post(this.tasksUrl, bodyString, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }

    // Update a task
    updateTask (id:string, taskText:string){
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });

        return this.http.put(`${this.tasksUrl}/${id}`, {'taskText': taskText}, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Delete a task
    removeTask (id:string): Observable<Task[]> {
        return this.http.delete(`${this.tasksUrl}/${id}`)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }
}

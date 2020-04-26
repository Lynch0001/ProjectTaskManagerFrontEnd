import { Injectable } from '@angular/core';
import { Observable,of, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8080/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || { };
  }

  getProjects(): Observable<any>{
    return this.http.get(this.endpoint + 'projects').pipe(
      map(this.extractData));
  }

  getTask(id: number, tid: number): Observable<any>{
    return this.http.get(this.endpoint + 'projects/' + id + '/tasks/' + tid,).pipe(
      map(this.extractData));
  }

  getTasks(): Observable<any>{
    return this.http.get(this.endpoint + 'projects/tasks').pipe(
      map(this.extractData));
  }

  getTasksByProject(id): Observable<any>{
    return this.http.get(this.endpoint + 'projects/' + id + '/tasks').pipe(
      map(this.extractData));
  }

  getProject(id): Observable<any>{
    return this.http.get(this.endpoint + 'projects/' + id).pipe(
      map(this.extractData));
  }

   addProject(project): Observable<any> {
    console.log(project);
    return this.http.post<any>(this.endpoint + 'projects', JSON.stringify(project), this.httpOptions).pipe(
      tap((project) => console.log(`added project id=${project.id}`)),
      catchError(this.handleError<any>('addproject'))
    );
  }

  updateProject(id, project): Observable<any> {
    return this.http.put(this.endpoint + 'projects/', JSON.stringify(project), this.httpOptions).pipe(
      tap(_ => console.log(`updated project id=${id}`)),
      catchError(this.handleError<any>('updateproject'))
    );
  }

  deleteproject(id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'projects/' + id).pipe(      //, this.httpOptions
      tap(_ => console.log(`deleted project id=${id}`)),  
      catchError(this.handleError<any>('deleteproject'))
    );
  }

  updateTask(id:number, task): Observable<any> {
    return this.http.put(this.endpoint + 'projects/' + id + '/tasks/' + task.tid, JSON.stringify(task), this.httpOptions).pipe(
      tap(_ => console.log(`updated task with project id=${id}`)),
      catchError(this.handleError<any>('updatetask'))
    );
  }

  deletetask(id: number, tid: number): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'projects/' + id + '/tasks/' + tid, this.httpOptions).pipe(  
      tap(_ => console.log(`deleted task id=${tid}`)),
      catchError(this.handleError<any>('deletetask'))
    );
  }

  addTask(id: number, task): Observable<any> {
    return this.http.post<any>(this.endpoint + 'projects/' + id + '/tasks', JSON.stringify(task), this.httpOptions).pipe(
      tap((task) => console.log(`added task to project id=${id}`)),  
      catchError(this.handleError<any>('addTask'))
    );
  }

  // TODO: Test this section
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }  
}

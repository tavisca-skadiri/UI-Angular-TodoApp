import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITodo } from './todo';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private _url: string = "http://localhost:9090/todos";
  constructor(private http:HttpClient) { }

  getTodos(): Observable<ITodo>{
    return this.http.get<ITodo>(this._url);
  }

  addTodo(newtodoname:string){
    var _requestbody = JSON.stringify({ todoname : newtodoname });
    return this.http.post(this._url,_requestbody);
  }

  updateTodo(newtodoname:string,index:number){
    var _requestbody = JSON.stringify({ todoname : newtodoname });
    return this.http.put(this._url+"/"+index,_requestbody);
  }

  deleteTodo(index:number){
    return this.http.delete(this._url+"/"+index);
  }
}
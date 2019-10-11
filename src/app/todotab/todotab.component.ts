import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todotab',
  templateUrl: './todotab.component.html',
  styleUrls: ['./todotab.component.css']
})
export class TodotabComponent implements OnInit {
  newtodoname: any = "";
  private todoArray: Array<any> = [];

  constructor(private _todoService:TodoService) { }
  
  ngOnInit() {
    this.getTodos();
  }
  
  getTodos(){
    this._todoService.getTodos().subscribe(data => this.todoArray = data.todos);
  }
  
  addTodo() {
    this._todoService.addTodo(this.newtodoname).subscribe(()=>this.getTodos());
    this.newtodoname = "";
  }
  
  editTodo(i:number) {
    var val = prompt("Enter new Todo value");
    this._todoService.updateTodo(val,i).subscribe(()=>this.getTodos());
  }
  
  deleteTodo(i:number) {
    this._todoService.deleteTodo(i).subscribe(()=>this.getTodos());
  }
}
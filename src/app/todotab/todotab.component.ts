import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todotab',
  templateUrl: './todotab.component.html',
  styleUrls: ['./todotab.component.css']
})
export class TodotabComponent implements OnInit {
  newtodoname: any = "";
  private todoArray: Array<any> = ["Eat","Sleep","Dance","Study","Repeat"];
  constructor() { }
  ngOnInit() {  }

  addTodo() {
      this.todoArray.push(this.newtodoname);
      this.newtodoname = "";
  }
  editTodo(i:number) {
    this.todoArray[i] = this.newtodoname;
    this.newtodoname = "";
  }
  deleteTodo(i:number) {
      this.todoArray.splice(i, 1);
  }
}

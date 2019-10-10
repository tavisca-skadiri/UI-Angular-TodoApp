import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public isTodoVisible; isProfileVisible; isSettingsVisible;
  constructor() { }

  ngOnInit() {
    this.loadTab("todo");
  }
  
  loadTab(tabname:string) {
    switch(tabname){
      case "todo":
          this.isTodoVisible = true;
          this.isProfileVisible = this.isSettingsVisible = false;
        break;		
      case "profile":
          this.isProfileVisible = true;
          this.isTodoVisible = this.isSettingsVisible = false;
        break;		
      case "settings":
          this.isTodoVisible = this.isProfileVisible = false;
          this.isSettingsVisible = true;
        break;		
    }
  }
}
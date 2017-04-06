import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navStatus:string = 'recipe';
  headerClicked(event:string){
    this.navStatus = event;
  }
}

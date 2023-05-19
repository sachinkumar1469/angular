import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing In Angular';
  testCSD = false;
  onClick(){
    this.testCSD = !this.testCSD;
  }
}

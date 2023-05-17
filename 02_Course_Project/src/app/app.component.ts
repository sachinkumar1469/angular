import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02_Course_Project';
  testCSD = false;
  onClick(){
    this.testCSD = !this.testCSD;
  }
}

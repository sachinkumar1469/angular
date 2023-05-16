import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Getting_Started';
  isAllowed:boolean = true;
  creationStatus = "No Server was created."

  onAddServer(){
    this.creationStatus = "Server was created";
  }
  onInputChange(e:Event){
    console.log((<HTMLInputElement>e.target).value);
  }
}

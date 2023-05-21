import { Component,OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit,OnChanges {

  errorMessage:string = "Default Error Message"

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    // console.log(this.route.snapshot.data);
    // this.route.data.subscribe((data:Data)=>{
    //   console.log("Data",data);
    // })
    // this.errorMessage = this.route.snapshot.data["message"]
  }
  ngOnChanges(){
    // console.log(this.route.snapshot.data,">>>>>>>>>>>>");
  }
}

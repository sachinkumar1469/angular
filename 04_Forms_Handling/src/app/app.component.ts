import { Component} from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04_Forms_Handling';
  genders:string[] = ['male','female'];
  answer:string="";

  onSubmit(f:NgForm){
    console.log("Submitted",f);
  }

  usernameSuggestion(form:NgForm){
    // Set all the values at once
    // form.setValue({
    //   userData:{
    //     username:"suggestedUsername",
    //     email:""
    //   },
    //   gender:"",
    //   secret:"pet",
    //   questionAnswer:""
    // })
    // To set the individual value
    form.form.patchValue({
      userData:{
        username:"sanyadav",
        // email:"@gmail.com"
      }
    })
  }
}

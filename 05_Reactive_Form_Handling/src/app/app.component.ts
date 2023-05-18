import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders:string[] = ['male','female'];
  forbiddenUsernames:string[] = ["username","user"];

  signupForm!:FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username:new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender:new FormControl("male"),
      hobbies: new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  onAddHobby(){
    (this.signupForm.get('hobbies') as FormArray).push(new FormControl(null,Validators.required))
  }

  getHobbies(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control:FormControl):{[s:string]:boolean}|null{
    if(this.forbiddenUsernames.includes(control.value)){
      return {
        forbidden:true
      }
    };
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{

    return new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value == 'test@test.com'){
           resolve({emailForbidden:true});
        } else {
           resolve(null);
        }
      },1000);
    });
  }

  usernameSuggestion(){

  }
}

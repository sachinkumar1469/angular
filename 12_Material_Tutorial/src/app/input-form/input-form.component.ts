import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  @ViewChild("myForm") myForm!:NgForm;

  formValues:any[]=[];

  onSubmit(){
    console.log(this.myForm.value);
    for(let key in this.myForm.value){

      this.formValues.push({key:key,value:this.myForm.value[key]})
    }
    console.log(this.formValues);
  }
}

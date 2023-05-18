import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  constructor(private route:ActivatedRoute){};

  recipeId!:number;
  isEdit:boolean = true;

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.recipeId = param['id'];
      this.isEdit = param['id'] != undefined;
      console.log(this.isEdit);
    })
  }
}

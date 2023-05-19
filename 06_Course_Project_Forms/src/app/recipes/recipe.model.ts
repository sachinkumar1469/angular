import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
  constructor(
    public id:number = 0,
    public name : string = "",
    public description : string = "",
    public imagePath : string = "",
    public ingredients : Ingredient[] = []
  ){
  }
}

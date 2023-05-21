import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,private rStorageSrv:DataStorageService){}

  navigateProg(path:string){
    this.router.navigate([path]);
  }
  newRecipe(){
    this.router.navigate(["/recipe","new"]);
  }
  onSaveRecipe(){
    this.rStorageSrv.saveRecipes();
  }
}

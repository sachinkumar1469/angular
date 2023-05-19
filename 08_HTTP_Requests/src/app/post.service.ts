import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators"

@Injectable({
  providedIn:'root'
})
export class PostService{

  constructor(private http:HttpClient){}

  createAndStorePost(title:string,content:string){
    this.http.post("http://localhost:8000/create",{title,content},{observe:'response'}).subscribe((data)=>{
      console.log(data);
    });
  }

  fetchPosts(){
    return this.http.get<any[]>("http://localhost:8000",{
      headers:new HttpHeaders({"Authorization":"Bearer Token"}),
      params: new HttpParams().set("sort","asc")
    })
      .pipe(map(data=>{
        let newPosts: any[] = [];
        data.forEach((d,i)=>{
          d.id = i;
          newPosts.push(d);
        });
        return newPosts;
      }))
  }
}

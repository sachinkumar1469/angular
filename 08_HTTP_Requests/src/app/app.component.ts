import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators"
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:any[] = [];
  isFetching = false;
  error:string|null = null;

  constructor(private http: HttpClient,private postSrv:PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postSrv.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postSrv.fetchPosts().subscribe((posts)=>{
      this.loadedPosts = posts;
      this.isFetching = false;
    },(err)=>{
      console.log("Error",err);
      this.error = err.error.msg;
    });

  }



  onClearPosts() {
    // Send Http request
  }
}

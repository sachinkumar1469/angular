import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"


export class AuthInterceptorService implements HttpInterceptor{

  intercept(req:HttpRequest<any>,next:HttpHandler){
    console.log("Request on it's way");
    let newReq = req.clone({
      headers:req.headers.append("Authorization","Bearer token")
    })
    return next.handle(newReq);
  }
}

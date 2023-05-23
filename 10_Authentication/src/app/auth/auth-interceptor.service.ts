import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustAll, exhaustMap, take } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authSrv:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authSrv.user.pipe(take(1),exhaustMap(user=>{
      const modifiedReq = req.clone({headers:req.headers.append("Interceptor",""+user?.token)})
      return next.handle(modifiedReq);
    }))
  }
}

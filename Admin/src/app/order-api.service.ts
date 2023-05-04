import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderAPIService {
  constructor(private _http: HttpClient) { }
  getOrders():Observable<any>
{

const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")

const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("http://localhost:6868/orders/",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Order>),
retry(3),
catchError(this.handleError))
}
handleError(error:HttpErrorResponse){
return throwError(()=>new Error(error.message))
}
getOrderStatus(OrderStatus:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("http://localhost:6868/order/"+OrderStatus,requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Order>),
      retry(3),
      catchError(this.handleError)
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public isLogin:boolean = false
  public user:any = null
  public id:any

  apiUrl=" https://ntiproject.herokuapp.com/"
  constructor(private _http:HttpClient) { }

  registerUser(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}api/users/register/admin`,data)
  }
  loginUser(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}api/users/login/admin`,data)
  }
  me():Observable<any>{
    return this._http.get(`${this.apiUrl}api/users/me`)
  }
  logout():Observable<any>{
    return this._http.post(`${this.apiUrl}api/users/logout`,null)
  }
   showAllCats():Observable<any>{
    return this._http.get(`${this.apiUrl}api/user/showAllcats`)
  }
  showAllBooks(catType:string):Observable<any>{
    return this._http.get(`${this.apiUrl}api/user/showAllBooks/${catType}`)
  }
  showBookById(id:any):Observable<any>{
    return this._http.get(`${this.apiUrl}api/user/showBook/${id}`)
  }
  addProduct(data:any,catType:string):Observable<any>{
    return this._http.post(`${this.apiUrl}api/book/addbook/${catType}`,data)
  }
  addImage(data:any,bookId:any):Observable<any>{
    return this._http.post(`${this.apiUrl}api/book/profile/${bookId}`,data)
  }
  addAttribute(data:any,bookId:any):Observable<any>{
    return this._http.post(`${this.apiUrl}api/book/addAttrbiutes/${bookId}`,data)
  }
    buyBook(data:any,bookId:any,q:number):Observable<any>{
    return this._http.post(`${this.apiUrl}api/user/buyBook/${bookId}/${q}`,data)
  }
  //router.get("/buyBook/:id/:attId", auth, userConroller.buyBook);
}
//router.post( "/profile/:bookId",  authAdmin,  uploade.single("img"),adminController.productImg);
//showAllBooks", auth, userConroller.showAllBooks

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from './shared/constant/url-constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = `${BaseUrl.Registration}`;

  constructor(private http: HttpClient) { }

  getEmployee(id: any): Observable<any> {
      let num = id;
      let queryParams = new HttpParams();
      queryParams = queryParams.append("id",id);
      return this.http.get(this.baseUrl+"/es",{params:queryParams});
//    return this.http.get(`${this.baseUrl}/${id}`);
  }

getEmployeeByEmail(emailId: string): Observable<any> {

      let queryParams = new HttpParams();
      queryParams = queryParams.append("emailId",emailId);
      return this.http.get(this.baseUrl+"/email",{params:queryParams});
//    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

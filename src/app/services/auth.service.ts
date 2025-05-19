import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = []
  url: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  validar(email: string, password: string): Observable<User[]> {

    return this.http.get<User[]>(this.url,{params:{"email":email,"password":password}});
  }
  registrar(dni: string, nombre: string, email: string, password: string): void {
    const newUser = new User(dni, nombre, email, password, 'user');
    this.users.push(newUser);
    this.http.post(this.url, newUser).subscribe((response) => {
      console.log('Usuario registrado:', response);
    });
  }

}

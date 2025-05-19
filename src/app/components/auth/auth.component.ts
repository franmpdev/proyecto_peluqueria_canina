import { AuthService } from './../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  emailRegistro: string = '';
  passwordRegistro: string = '';
  nombreRegistro: string = '';
  dniRegistro: string = '';
  emailLogin: string = '';
  passwordLogin: string = '';
  showLogin: boolean = true; // Controla si se muestra el formulario de inicio de sesión

  toggleForm(): void {
    this.showLogin = !this.showLogin; // Alterna entre los formularios
  }
  constructor(private AuthService :AuthService){}
  login(email: string, password: string): void {
    let usuario = this.AuthService.validar(email, password);
    usuario.subscribe((data) => {
      if (data.length > 0) {
        console.log('Usuario encontrado');
        console.log(data);
      } else {
        console.log('Usuario no encontrado');
      }
    });
  }
  registrar(dni: string, nombre: string,  email: string, password: string): void {
    this.AuthService.registrar(dni, nombre, email, password);


  }
}

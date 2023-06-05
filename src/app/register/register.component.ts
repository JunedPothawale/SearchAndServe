import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  SignUpWithGoogle(){
    alert("Sign Up With Google")
  }
  showPassword(){
    const password_input = <HTMLElement>document.getElementById("password");
    const eye_open = <HTMLElement>document.getElementById("eye_open");
    const eye_close = <HTMLElement>document.getElementById("eye_close");
    if(password_input.getAttribute('type') == 'text'){
      password_input.setAttribute('type','password')
      eye_close.classList.toggle('hidden')
      eye_open.classList.toggle('hidden')
    }else if (password_input.getAttribute('type') == 'password') {
      password_input.setAttribute('type','text')
      eye_close.classList.toggle('hidden')
      eye_open.classList.toggle('hidden')
    }
  }
}

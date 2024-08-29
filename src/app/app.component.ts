import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_PT';
  formulario: FormGroup;
  URL = "http://localhost:8080"

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      const result = this.http.post(`${this.URL}/crear_estudiante`, this.formulario.value); 
      console.log("resultado", result);
    } else {
      console.log('Formulario no válido');
    }
  }
}

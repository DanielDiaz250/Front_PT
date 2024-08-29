import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front_PT';
  formulario: FormGroup;
  URL = "http://localhost:8080"

  constructor(private http: HttpClient) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl('', [Validators.required]),
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

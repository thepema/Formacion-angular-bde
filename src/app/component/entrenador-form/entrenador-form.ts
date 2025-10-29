import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { range, tajertaValidator } from './tarjeta.validator';

@Component({
  selector: 'app-entrenador-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './entrenador-form.html',
  styleUrl: './entrenador-form.scss',
})
export class EntrenadorForm{
  entrenadorForm: FormGroup;
  tarjeta: FormGroup;

  // ejemplo: string = 'Ejemplo de texto para el formulario';

  constructor(private fb: FormBuilder) {
    this.tarjeta =  this.fb.group({
        numero: ['', [Validators.minLength(7), Validators.maxLength(7) , Validators.pattern('^[0-9]{7}$')]],
        validez: [null, range(1, 5)],
      },{
        validators: tajertaValidator
      });
    this.entrenadorForm = this.fb.group({
      nombre: ['', Validators.required],
      tarjetaDeEntrenador: this.tarjeta,
      edad: [18, [Validators.required, Validators.min(10), Validators.max(99)]],
      region: ['', Validators.required],
      genero: ['', Validators.required],
      pokedex: [false]
    });
  }

  onSubmit() {
    if (this.entrenadorForm.valid) {
      console.log('Datos del entrenador:', this.entrenadorForm.value);
    } else {
      this.entrenadorForm.markAllAsTouched();
    }
  }

}

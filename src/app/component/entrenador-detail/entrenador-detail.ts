import { CommonModule } from '@angular/common';
import { Component, ContentChild, input, InputSignal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-entrenador-detail',
  imports: [CommonModule],
  templateUrl: './entrenador-detail.html',
  styleUrl: './entrenador-detail.scss',
})
export class EntrenadorDetail {

  public entrenador: InputSignal<any> = input(null);

  @ContentChild('extras') extras!: TemplateRef<any>;
}

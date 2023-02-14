import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = 'david'
  nombreUpper: string = 'DAVID'
  nombreCompleto: string = 'DaVID FernanDo'

  fecha: Date = new Date();  // Dia actual

}

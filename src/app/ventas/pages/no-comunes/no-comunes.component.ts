import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {



  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Ana', 'Nasly', 'Juliana'];

  clientesMapa = {
    '=0'   : 'no tenemos ningún cliente esperando.',
    '=1'   : 'tenemos un cliente esperando.',
    '=2'   : 'tenemos # clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'David';
    this.genero = 'masculino'
  }

  borrarPersona(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'David',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]
  
  // Async Pipe
  // Observable

  miObservable = interval(4000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);

  });


}

import { Component } from '@angular/core';
import { Empresa } from '../../interface/paginaprincipal.interfaces';

@Component({
  selector: 'pagina-principal-empresas',
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {
  public empresa: Empresa[] = [
    {
      id: '1',
      nombre: 'Tech Innovators S.A.',
      fecha: '2022-04-15',
      direccion: 'Carrera 45 #123-56, Bogotá, Colombia',
      numero: {
        fijo: '+57 1 2345678',
        celular: '+57 310 4567890',
      },
      sitioWeb: 'https://www.techinnovators.com',
    },
    // {
    //   id: '2',
    //   nombre: 'Soluciones Globales Ltda.',
    //   fecha: '2021-09-30',
    //   direccion: 'Avenida 9 #67-89, Medellín, Colombia',
    //   numero: {
    //     fijo: '+57 4 8765432',
    //     celular: '+57 312 9876543',
    //   },
    //   sitioWeb: 'https://www.solucionesglobales.com',
    // },
    // {
    //   id: '3',
    //   nombre: 'InnovaTech Inc.',
    //   fecha: '2023-01-20',
    //   direccion: 'Calle 15 #32-45, Cali, Colombia',
    //   numero: {
    //     fijo: '+57 2 7654321',
    //     celular: '+57 315 1234567',
    //   },
    //   sitioWeb: 'https://www.innovatechinc.com',
    // },
    // {
    //   id: '4',
    //   nombre: 'Desarrollos Avanzados SAS',
    //   fecha: '2020-06-10',
    //   direccion: 'Carrera 7 #45-67, Barranquilla, Colombia',
    //   numero: {
    //     fijo: '+57 5 8765432',
    //     celular: '+57 318 9871234',
    //   },
    //   sitioWeb: 'https://www.desarrollosavanzados.com',
    // },
    // {
    //   id: '5',
    //   nombre: 'Ingeniería Creativa S.A.',
    //   fecha: '2022-11-05',
    //   direccion: 'Calle 10 #15-23, Cartagena, Colombia',
    //   numero: {
    //     fijo: '+57 5 1234567',
    //     celular: '+57 316 6543210',
    //   },
    //   sitioWeb: 'https://www.ingenieriacreativa.com',
    // },
  ];
}


import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contacto } from '../../interface/paginaprincipal.interfaces';

@Component({
  selector: 'pagina-principal-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {

  public contactos: Contacto[] = [
    {
      id: '1',
      direccion: 'Carrera 52 #91-66, Medellín, Colombia',
      correo: 'contacto@empresa1.com',
      sitioWeb: 'https://www.empresa1.com',
      redSocial: 'https://www.linkedin.com',
      DireccionCorrespondenciaCorreo: 'Carrera 52 #91-66, Envigado, Colombia',
      Numero: {
        fijo: '+57 4 3137000',
        celular: '+57 312 3134477',
      }
    },
    // {
    //   id: '2',
    //   direccion: 'Avenida 10 #20-30, Bogotá, Colombia',
    //   correo: 'info@empresa2.com',
    //   sitioWeb: 'https://www.empresa2.com',
    //   redSocial: 'https://www.instagram.com/empresa2',
    //   DireccionCorrespondenciaCorreo: 'Calle 10 #20-30, Chía, Colombia',
    //   Numero: {
    //     fijo: '+57 1 9876543',
    //     celular: '+57 310 9876543',
    //   }
    // },
    // {
    //   id: '3',
    //   direccion: 'Calle 50 #80-90, Cali, Colombia',
    //   correo: 'soporte@empresa3.com',
    //   sitioWeb: 'https://www.empresa3.com',
    //   redSocial: 'https://twitter.com/empresa3',
    //   DireccionCorrespondenciaCorreo: 'Calle 50 #80-90, Palmira, Colombia',
    //   Numero: {
    //     fijo: '+57 2 6543210',
    //     celular: '+57 315 6543210',
    //   }
    // },
    // {
    //   id: '4',
    //   direccion: 'Carrera 25 #35-40, Barranquilla, Colombia',
    //   correo: 'ventas@empresa4.com',
    //   sitioWeb: 'https://www.empresa4.com',
    //   redSocial: 'https://www.facebook.com/empresa4',
    //   DireccionCorrespondenciaCorreo: 'Carrera 25 #35-40, Soledad, Colombia',
    //   Numero: {
    //     fijo: '+57 5 1234567',
    //     celular: '+57 316 1234567',
    //   }
    // },
    // {
    //   id: '5',
    //   direccion: 'Calle 15 #23-45, Cartagena, Colombia',
    //   correo: 'contacto@empresa5.com',
    //   sitioWeb: 'https://www.empresa5.com',
    //   redSocial: 'https://www.linkedin.com/in/empresa5',
    //   DireccionCorrespondenciaCorreo: 'Calle 15 #23-45, Santa Marta, Colombia',
    //   Numero: {
    //     fijo: '+57 5 7654321',
    //     celular: '+57 317 7654321',
    //   }
    // }
  ];

 }

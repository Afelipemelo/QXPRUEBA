
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Articulo, Contacto, Empresa, MenuItem, SubArticulos } from '../interface/paginaprincipal.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QxService {

  public empresa : Empresa[] = [];
  public contacto : Contacto[] = [];
  public articulo : Articulo[] = [];

  public _menuItems : MenuItem[] =[
    {
      nombre : 'EMPRESAS',
      icon : 'bi bi-backpack4',
      reouterLink : 'empresas',
      seccion : 1,
      subMenu : true,
      nombreEmpresa : ['Tech Innovators S.A.', 'Soluciones Globales Ltda.', 'InnovaTech Inc.', 'Desarrollos Avanzados SAS', 'Ingeniería Creativa S.A.']
    },
    {
      nombre : 'ARTICULOS',
      icon : 'bi bi-file-earmark-text',
      reouterLink : 'articulos',
      seccion : 2,
      subMenu : true,
      nombreEmpresa : ['Eco Vida', 'Tech Hoy' , 'Arte Zen']
    },
    {
      nombre : 'COLABORADORES',
      icon : 'bi bi-person-fill',
      seccion : 3,
      reouterLink : '/',
      subMenu : false

    }
  ];

  public _empresas: Empresa[] = [
    {
      id: 1,
      idContacto : 1,
      nombre: 'Tech Innovators S.A.',
      fecha: '2022-04-15',
      direccion: 'Carrera 45 #123-56, Bogotá, Colombia',
      numero: {
        fijo: '+57 1 2345678',
        celular: '+57 310 4567890',
      },
      sitioWeb: 'https://www.techinnovators.com',
    },
    {
      id: 2,
      idContacto : 2,
      nombre: 'Soluciones Globales Ltda.',
      fecha: '2021-09-30',
      direccion: 'Avenida 9 #67-89, Medellín, Colombia',
      numero: {
        fijo: '+57 4 8765432',
        celular: '+57 312 9876543',
      },
      sitioWeb: 'https://www.solucionesglobales.com',
    },
    {
      id: 3,
      idContacto : 3,
      nombre: 'InnovaTech Inc.',
      fecha: '2023-01-20',
      direccion: 'Calle 15 #32-45, Cali, Colombia',
      numero: {
        fijo: '+57 2 7654321',
        celular: '+57 315 1234567',
      },
      sitioWeb: 'https://www.innovatechinc.com',
    },
    {
      id: 4,
      idContacto : 4,
      nombre: 'Desarrollos Avanzados SAS',
      fecha: '2020-06-10',
      direccion: 'Carrera 7 #45-67, Barranquilla, Colombia',
      numero: {
        fijo: '+57 5 8765432',
        celular: '+57 318 9871234',
      },
      sitioWeb: 'https://www.desarrollosavanzados.com',
    },
    {
      id: 5,
      idContacto : 5,
      nombre: 'Ingeniería Creativa S.A.',
      fecha: '2022-11-05',
      direccion: 'Calle 10 #15-23, Cartagena, Colombia',
      numero: {
        fijo: '+57 5 1234567',
        celular: '+57 316 6543210',
      },
      sitioWeb: 'https://www.ingenieriacreativa.com',
    },
  ];

  public _contactos: Contacto[] = [
    {
      id: 1,
      direccion: 'Carrera 52 #91-66, Medellín, Colombia',
      correo: 'contacto@empresa1.com',
      sitioWeb: 'https://www.empresa1.com',
      redSocial: 'https://www.linkedin.com',
      DireccionCorrespondenciaCorreo: 'Carrera 52 #91-66, Envigado, Colombia',
      Numero: {
        fijo: '+57 4 3137000',
        celular: '+57 312 3134477',
      },
      idArticulo : 123
    },
    {
      id: 2,
      direccion: 'Avenida 10 #20-30, Bogotá, Colombia',
      correo: 'info@empresa2.com',
      sitioWeb: 'https://www.empresa2.com',
      redSocial: 'https://www.instagram.com/empresa2',
      DireccionCorrespondenciaCorreo: 'Calle 10 #20-30, Chía, Colombia',
      Numero: {
        fijo: '+57 1 9876543',
        celular: '+57 310 9876543',
      },
      idArticulo : 124
    },
    {
      id: 3,
      direccion: 'Calle 50 #80-90, Cali, Colombia',
      correo: 'soporte@empresa3.com',
      sitioWeb: 'https://www.empresa3.com',
      redSocial: 'https://twitter.com/empresa3',
      DireccionCorrespondenciaCorreo: 'Calle 50 #80-90, Palmira, Colombia',
      Numero: {
        fijo: '+57 2 6543210',
        celular: '+57 315 6543210',
      },
      idArticulo : 125
    },
    {
      id: 4,
      direccion: 'Carrera 25 #35-40, Barranquilla, Colombia',
      correo: 'ventas@empresa4.com',
      sitioWeb: 'https://www.empresa4.com',
      redSocial: 'https://www.facebook.com/empresa4',
      DireccionCorrespondenciaCorreo: 'Carrera 25 #35-40, Soledad, Colombia',
      Numero: {
        fijo: '+57 5 1234567',
        celular: '+57 316 1234567',
      }
    },
    {
      id: 5,
      direccion: 'Calle 15 #23-45, Cartagena, Colombia',
      correo: 'contacto@empresa5.com',
      sitioWeb: 'https://www.empresa5.com',
      redSocial: 'https://www.linkedin.com/in/empresa5',
      DireccionCorrespondenciaCorreo: 'Calle 15 #23-45, Santa Marta, Colombia',
      Numero: {
        fijo: '+57 5 7654321',
        celular: '+57 317 7654321',
      }
    }
  ];

  public _subArticulos : SubArticulos[] = [
    {
      id: '1',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'La importancia de la tecnología en la educación',
      descripcion: 'Este artículo explora cómo la tecnología ha transformado la forma en que los estudiantes aprenden y los profesores enseñan'
        },
    {
      id: '2',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Tendencias en inteligencia artificial para 2024',
      descripcion: 'Conoce las últimas tendencias en inteligencia artificial y cómo estas tecnologías están cambiando diversas industrias,',
     },{
      id:'3',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Cómo mejorar la ciberseguridad en las empresas',
      descripcion: 'En este artículo te proporcionamos una guía práctica para mejorar la seguridad cibernética en tu empresa, protegiendo tus datos',
    },
      {
        id:'4',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'El futuro del trabajo remoto',
      descripcion: 'Exploramos el impacto a largo plazo del trabajo remoto en las empresas y empleados'
    },
    {
      id: '5',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Cómo las energías renovables están transformando el planeta',
      descripcion: 'Un análisis de cómo las energías renovables están contribuyendo a reducir la huella deenible.',
    },
    {
      id: '6',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Cómo las energías renovables están transformando el planeta',
      descripcion: 'Un análisis de cómo las energías renovables están contribuyendo a reducir la huella deenible.',
    },
    {
      id: '7',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Cómo las energías renovables están transformando el planeta',
      descripcion: 'Un análisis de cómo las energías renovables están contribuyendo a reducir la huella deenible.',
    },
    {
      id: '8',
      imagen: '../../../../assets/img/resource-1.png',
      titulo: 'Cómo las energías renovables están transformando el planeta',
      descripcion: 'Un análisis de cómo las energías renovables están contribuyendo a reducir la huella deenible.',
    },
  ];

  public _articulos : Articulo[] =[
    {
      id : 123,
      titulo : 'Eco Vida'
    },
    {
      id : 124,
      titulo : 'Tech Hoy'
    },
    {
      id : 125,
      titulo : 'Arte Zen'
    },
  ]

  get menuItems(){
    return [...this._menuItems]
  }
  get empresas(){
    return [...this.empresa]
  }
  get contactos(){
    return [...this.contacto]
  }
  get articulos(){
    return [this._subArticulos]
  }
  searchEmpresa(nombre : string){
    this.empresa = this._empresas.filter((empre)=> empre.nombre == nombre);
    this.contacto = this._contactos;
    this.contacto = this.contacto.filter((contac)=> contac.id == this.empresa[0].idContacto)
  }
  searchArticulo(nombre : string){
    this.articulo = this._articulos.filter((arti) => arti.titulo == nombre);
    this.contacto = this._contactos.filter((contac)=> contac.idArticulo == this.articulo[0].id)
  }
}


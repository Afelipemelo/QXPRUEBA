import { Component } from '@angular/core';
import { Articulos } from '../../interface/paginaprincipal.interfaces';


@Component({
  selector: 'pagina-principal-articulo',
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  public articulos : Articulos[] = [

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

}

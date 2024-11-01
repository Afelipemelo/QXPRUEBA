export interface SubArticulos {
  id:          string;
  imagen:      string;
  titulo:      string;
  descripcion: string;
}
export interface Articulo {
  id : number;
  titulo : string;
}
export interface Numero {
  fijo: string;
  celular: string;
}
export interface Contacto {
  id: number;
  direccion: string;
  correo: string;
  sitioWeb: string;
  redSocial: string;
  DireccionCorrespondenciaCorreo: string;
  Numero : Numero;
  idArticulo? : number
}

export interface Empresa {
  id: number;
  idContacto : number
  nombre : string;
  fecha: string;
  direccion: string;
  numero: Numero;
  sitioWeb: string;
}

export interface MenuItem {
  nombre: string;
  icon : string;
  seccion : number;
  reouterLink : string;
  subMenu : boolean;
  nombreEmpresa ? : string[];
}

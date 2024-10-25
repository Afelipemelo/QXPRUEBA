export interface Articulos {
  id:          string;
  imagen:      string;
  titulo:      string;
  descripcion: string;
}

export interface Numero {
  fijo: string;
  celular: string;
}
export interface Contacto {
  id: string;
  direccion: string;
  correo: string;
  sitioWeb: string;
  redSocial: string;
  DireccionCorrespondenciaCorreo: string;
  Numero : Numero;
}

export interface Empresa {
  id: string;
  nombre : string;
  fecha: string;
  direccion: string;
  numero: Numero;
  sitioWeb: string;
}

export interface MenuItem {
  nombre: string;
  icon : string;
  reouterLink : string;
}

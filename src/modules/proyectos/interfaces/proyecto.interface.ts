// interface RedesSociales {
//   twitter: string
//   facebook: string
// }

export interface Proyecto {
  id: string
  nombre: string
  descripcion?: string
  repositorio_url: string
  imagen: string
  fecha_creacion: string
  tecnologias?: string[]
  estado_proyecto?: string
  etiquetas?: string[]
  contribuyentes?: string[]
  licencia?: string
}

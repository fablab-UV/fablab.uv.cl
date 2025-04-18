export interface Evento {
  id: string
  titulo: string
  descripcion: string
  es_publico: boolean
  categoria: 'Taller' | 'Conferencia' | 'Seminario' | 'Curso' | string
  ubicacion: string
  institucion: string
  fecha_evento: string
  enlace_inscripcion?: string | null
}

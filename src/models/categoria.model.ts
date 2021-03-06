import {Entity, model, property} from '@loopback/repository';

@model()
export class Categoria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idCategoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;


  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;

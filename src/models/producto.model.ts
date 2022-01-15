import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IdProducto: string;

  @property({
    type: 'string',
    required: true,
  })
  IdCategoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Costo: string;

  @property({
    type: 'string',
    required: true,
  })
  Existencia: string;

  @property({
    type: 'object',
  })
  Imagen?: object;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;

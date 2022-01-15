import {Entity, model, property} from '@loopback/repository';

@model()
export class MetPago extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IdPago: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;


  constructor(data?: Partial<MetPago>) {
    super(data);
  }
}

export interface MetPagoRelations {
  // describe navigational properties here
}

export type MetPagoWithRelations = MetPago & MetPagoRelations;

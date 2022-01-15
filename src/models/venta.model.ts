import {Entity, model, property} from '@loopback/repository';

@model()
export class Venta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IdVenta: string;

  @property({
    type: 'string',
    required: true,
  })
  IdPedido: string;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  PagoRes: string;

  @property({
    type: 'object',
  })
  Comprobante?: object;


  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;

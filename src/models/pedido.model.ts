import {Entity, model, property} from '@loopback/repository';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IdPedido: string;

  @property({
    type: 'string',
    required: true,
  })
  IdProducto: string;

  @property({
    type: 'string',
    required: true,
  })
  IdPago: string;

  @property({
    type: 'string',
    required: true,
  })
  IdVenta: string;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  Cantidad: string;

  @property({
    type: 'string',
    required: true,
  })
  FechaReq: string;

  @property({
    type: 'string',
    required: true,
  })
  HoraReq: string;

  @property({
    type: 'string',
    required: true,
  })
  PagoPar: string;

  @property({
    type: 'string',
    required: true,
  })
  PagoMed: string;

  @property({
    type: 'string',
    required: true,
  })
  CodigoPos: string;

  @property({
    type: 'string',
    required: true,
  })
  Domicilio: string;

  @property({
    type: 'string',
    required: true,
  })
  Referencia: string;


  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;

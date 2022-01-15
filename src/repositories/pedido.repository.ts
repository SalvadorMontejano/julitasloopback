import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Pedido, PedidoRelations} from '../models';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.IdPedido,
  PedidoRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Pedido, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Venta, VentaRelations} from '../models';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.IdVenta,
  VentaRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Venta, dataSource);
  }
}

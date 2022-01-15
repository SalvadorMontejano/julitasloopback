import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {MetPago, MetPagoRelations} from '../models';

export class MetPagoRepository extends DefaultCrudRepository<
  MetPago,
  typeof MetPago.prototype.IdPago,
  MetPagoRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(MetPago, dataSource);
  }
}

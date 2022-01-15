import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.IdProducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Producto, dataSource);
  }
}

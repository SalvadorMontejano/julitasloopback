import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {MetPago} from '../models';
import {MetPagoRepository} from '../repositories';

export class MetPagoControllerController {
  constructor(
    @repository(MetPagoRepository)
    public metPagoRepository : MetPagoRepository,
  ) {}

  @post('/met-pagos')
  @response(200, {
    description: 'MetPago model instance',
    content: {'application/json': {schema: getModelSchemaRef(MetPago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetPago, {
            title: 'NewMetPago',
          }),
        },
      },
    })
    metPago: Omit<MetPago, 'id'>,
  ): Promise<MetPago> {
    return this.metPagoRepository.create(metPago);
  }

  @get('/met-pagos/count')
  @response(200, {
    description: 'MetPago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MetPago) where?: Where<MetPago>,
  ): Promise<Count> {
    return this.metPagoRepository.count(where);
  }

  @get('/met-pagos')
  @response(200, {
    description: 'Array of MetPago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MetPago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MetPago) filter?: Filter<MetPago>,
  ): Promise<MetPago[]> {
    return this.metPagoRepository.find(filter);
  }

  @patch('/met-pagos')
  @response(200, {
    description: 'MetPago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetPago, {partial: true}),
        },
      },
    })
    metPago: MetPago,
    @param.where(MetPago) where?: Where<MetPago>,
  ): Promise<Count> {
    return this.metPagoRepository.updateAll(metPago, where);
  }

  @get('/met-pagos/{id}')
  @response(200, {
    description: 'MetPago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MetPago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MetPago, {exclude: 'where'}) filter?: FilterExcludingWhere<MetPago>
  ): Promise<MetPago> {
    return this.metPagoRepository.findById(id, filter);
  }

  @patch('/met-pagos/{id}')
  @response(204, {
    description: 'MetPago PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetPago, {partial: true}),
        },
      },
    })
    metPago: MetPago,
  ): Promise<void> {
    await this.metPagoRepository.updateById(id, metPago);
  }

  @put('/met-pagos/{id}')
  @response(204, {
    description: 'MetPago PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() metPago: MetPago,
  ): Promise<void> {
    await this.metPagoRepository.replaceById(id, metPago);
  }

  @del('/met-pagos/{id}')
  @response(204, {
    description: 'MetPago DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.metPagoRepository.deleteById(id);
  }
}

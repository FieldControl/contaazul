/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('./../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Products', () => {
  it('should get product category by id', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories/1ffc4a8d-af0a-4d2d-91f5-35adbee6e1ff').reply(200, {})
    const response = await client.products.category('1ffc4a8d-af0a-4d2d-91f5-35adbee6e1ff')
    expect(response.status).toBe(200)
  })

  it('should list product categories given no params', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories').reply(200, {})
    const response = await client.products.categories()
    expect(response.status).toBe(200)
  })

  it('should list product categories given valid params', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories').query({
      name: 'Outros insumos'
    }).reply(200, {})
    const response = await client.products.categories({
      name: 'Outros insumos'
    })
    expect(response.status).toBe(200)
  })

  it('should delete product by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/products/f059d668-a4e3-45e8-9cac-be30e6ea3b53').reply(200, {})
    const response = await client.products.delete('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
    expect(response.status).toBe(200)
  })

  it('should get product by id', async () => {
    nock('https://api.contaazul.com/v1').get('/products/f059d668-a4e3-45e8-9cac-be30e6ea3b53').reply(200, {})
    const response = await client.products.get('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
    expect(response.status).toBe(200)
  })

  it('should update product name by id', async () => {
    nock('https://api.contaazul.com/v1').put('/products/6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Playstation 4 PRO'
    }).reply(200, {})
    const response = await client.products.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Playstation 4 PRO'
    })
    expect(response.status).toBe(200)
  })

  it('should create product given valid params', async () => {
    nock('https://api.contaazul.com/v1').post('/products', {
      name: 'Playstation 4',
      value: 2500,
      code: 'ps4'
    }).reply(200, {})
    const response = await client.products.create({
      name: 'Playstation 4',
      value: 2500,
      code: 'ps4'
    })
    expect(response.status).toBe(200)
  })

  it('should list products', async () => {
    nock('https://api.contaazul.com/v1').get('/products').reply(200, {})
    const response = await client.products.list()
    expect(response.status).toBe(200)
  })

  it('should list products with params', async () => {
    nock('https://api.contaazul.com/v1').get('/products').query({
      name: 'xbox'
    }).reply(200, {})
    const response = await client.products.list({
      name: 'xbox'
    })
    expect(response.status).toBe(200)
  })
})
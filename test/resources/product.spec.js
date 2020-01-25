/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Products', () => {
  it('should create product', async () => {
    nock('https://api.contaazul.com/v1').post('/products', {
      name: 'Game Atari ET',
      value: 100,
      cost: 80,
      code: 'Game-1',
      barcode: '501234567890',
      available_stock: 1000,
      ncm_code: '96140000',
      cest_code: '0100300',
      net_weight: 10,
      gross_weight: 15
    }).reply(201, {})

    const response = await client.products.create({
      name: 'Game Atari ET',
      value: 100,
      cost: 80,
      code: 'Game-1',
      barcode: '501234567890',
      available_stock: 1000,
      ncm_code: '96140000',
      cest_code: '0100300',
      net_weight: 10,
      gross_weight: 15
    })
    expect(response.status).toBe(201)
  })

  it('should update product', async () => {
    nock('https://api.contaazul.com/v1').put('/products/6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Game Atari ET',
      value: 100,
      cost: 80,
      code: 'Game-1',
      barcode: '501234567890',
      available_stock: 1000,
      ncm_code: '96140000',
      cest_code: '0100300',
      net_weight: 10,
      gross_weight: 15
    }).reply(200, {})

    const response = await client.products.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Game Atari ET',
      value: 100,
      cost: 80,
      code: 'Game-1',
      barcode: '501234567890',
      available_stock: 1000,
      ncm_code: '96140000',
      cest_code: '0100300',
      net_weight: 10,
      gross_weight: 15
    })
    expect(response.status).toBe(200)
  })

  it('should get product', async () => {
    nock('https://api.contaazul.com/v1').get('/products/f059d668-a4e3-45e8-9cac-be30e6ea3b53').reply(200, {})
    const response = await client.products.get('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
    expect(response.status).toBe(200)
  })

  it('should list products', async () => {
    nock('https://api.contaazul.com/v1').get('/products').reply(200, {})
    const response = await client.products.list()
    expect(response.status).toBe(200)
  })

  it('should list products by name', async () => {
    nock('https://api.contaazul.com/v1').get('/products').query({
      name: 'Game Atari ET'
    }).reply(200, {})

    const response = await client.products.list({
      name: 'Game Atari ET'
    })

    expect(response.status).toBe(200)
  })

  it('should get product category', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories/c7288c09-829d-48b9-aee2-4f744e380587').reply(200, {})
    const response = await client.products.getCategory('c7288c09-829d-48b9-aee2-4f744e380587')
    expect(response.status).toBe(200)
  })

  it('should list product categories', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories').reply(200, {})
    const response = await client.products.listCategories()
    expect(response.status).toBe(200)
  })

  it('should list product categories by name', async () => {
    nock('https://api.contaazul.com/v1').get('/product-categories').query({
      name: 'Kitchen utensils',
      page: 1,
      size: 1
    }).reply(200, {})
    const response = await client.products.listCategories({
      name: 'Kitchen utensils',
      page: 1,
      size: 1
    })
    expect(response.status).toBe(200)
  })

  it('should delete product', async () => {
    nock('https://api.contaazul.com/v1').delete('/products/f059d668-a4e3-45e8-9cac-be30e6ea3b53').reply(204, {})
    const response = await client.products.delete('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
    expect(response.status).toBe(204)
  })
})

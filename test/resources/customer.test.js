/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('./../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Customers', () => {
  it('should list customer contacts by id', async () => {
    nock('https://api.contaazul.com/v1').get('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742/contacts').reply(200, {})
    const response = await client.customers.contacts('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should inactivate customer by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/customers/inactivate/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(200, {})
    const response = await client.customers.inactivate('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should delete customer by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(200, {})
    const response = await client.customers.delete('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should get customer by id', async () => {
    nock('https://api.contaazul.com/v1').get('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(200, {})
    const response = await client.customers.get('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should update customer name by id', async () => {
    nock('https://api.contaazul.com/v1').put('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Tony Stark'
    }).reply(200, {})
    const response = await client.customers.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'Tony Stark'
    })
    expect(response.status).toBe(200)
  })

  it('should list customers', async () => {
    nock('https://api.contaazul.com/v1').get('/customers').reply(200, {})
    const response = await client.customers.list()
    expect(response.status).toBe(200)
  })

  it('should create customer given valid params', async () => {
    nock('https://api.contaazul.com/v1').post('/customers', {
      name: 'Steve Rogers',
      person_type: 'NATURAL'
    }).reply(200, {})
    const response = await client.customers.create({
      name: 'Steve Rogers',
      person_type: 'NATURAL'
    })
    expect(response.status).toBe(200)
  })
})

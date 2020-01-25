/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('./../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Sale', () => {
  it('should list sale items by id', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab/items').reply(200, {})
    const response = await client.sales.items('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(200)
  })

  it('should delete sale by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab').reply(200, {})
    const response = await client.sales.delete('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(200)
  })

  it('should get sale by id', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab').reply(200, {})
    const response = await client.sales.get('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(200)
  })

  it('should update sale number by id', async () => {
    nock('https://api.contaazul.com/v1').put('/sales/70f2c0d9-4e64-439d-8911-cc6f383a29c3', { number: 12 }).reply(200, {})
    const response = await client.sales.update('70f2c0d9-4e64-439d-8911-cc6f383a29c3', { number: 12 })
    expect(response.status).toBe(200)
  })

  it('should list sales given valid params', async () => {
    nock('https://api.contaazul.com/v1').get('/sales').query({ status: 'PENDING' }).reply(200, {})
    const response = await client.sales.list({ status: 'PENDING' })
    expect(response.status).toBe(200)
  })

  it('should list sales', async () => {
    nock('https://api.contaazul.com/v1').get('/sales').reply(200, {})
    const response = await client.sales.list()
    expect(response.status).toBe(200)
  })

  it('should create sale given valid params', async () => {
    nock('https://api.contaazul.com/v1').post('/sales', {
      status: 'PENDING',
      emission: '2019-11-29T12:20:55.207Z',
      payment: {
        type: 'CASH',
        installments: [{
          number: 1,
          value: 300,
          due_date: '2019-11-29T12:20:55.207Z'
        }]
      }
    }).reply(200, {})
    const response = await client.sales.create({
      status: 'PENDING',
      emission: '2019-11-29T12:20:55.207Z',
      payment: {
        type: 'CASH',
        installments: [{
          number: 1,
          value: 300,
          due_date: '2019-11-29T12:20:55.207Z'
        }]
      }
    })
    expect(response.status).toBe(200)
  })
})

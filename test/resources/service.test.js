/* eslint-disable no-undef */
const nock = require('nock')
const ContaAzul = require('./../../src/index')
const client = new ContaAzul({
  accessToken: 'accessToken'
})

describe('Service', () => {
  it('should delete service by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/services/6dafd126-be9b-4b58-934f-f2137c1f6489').reply(200, {})
    const response = await client.services.delete('6dafd126-be9b-4b58-934f-f2137c1f6489')
    expect(response.status).toBe(200)
  })

  it('should get service by id', async () => {
    nock('https://api.contaazul.com/v1').get('/services/6dafd126-be9b-4b58-934f-f2137c1f6489').reply(200, {})
    const response = await client.services.get('6dafd126-be9b-4b58-934f-f2137c1f6489')
    expect(response.status).toBe(200)
  })

  it('should update service given valid params', async () => {
    nock('https://api.contaazul.com/v1').put('/services/197e9028-cb31-4fb1-8425-6fd54ec788ac', {
      name: 'Troca de bateria'
    }).reply(200, {})
    const response = await client.services.update('197e9028-cb31-4fb1-8425-6fd54ec788ac', {
      name: 'Troca de bateria'
    })
    expect(response.status).toBe(200)
  })

  it('should list services', async () => {
    nock('https://api.contaazul.com/v1').get('/services').reply(200, {})
    const response = await client.services.list()
    expect(response.status).toBe(200)
  })

  it('should list services given valid params', async () => {
    nock('https://api.contaazul.com/v1').get('/services').query({
      name: 'Limpeza de quarto'
    }).reply(200, {})
    const response = await client.services.list({ name: 'Limpeza de quarto' })
    expect(response.status).toBe(200)
  })

  it('should create service given valid params', async () => {
    nock('https://api.contaazul.com/v1').post('/services', {
      name: 'Reparo Mouse',
      value: 50,
      code: 'mouse-repair'
    }).reply(200, {})
    const response = await client.services.create({
      name: 'Reparo Mouse',
      value: 50,
      code: 'mouse-repair'
    })
    expect(response.status).toBe(200)
  })
})
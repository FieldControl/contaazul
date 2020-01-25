/* eslint-disable no-undef */
const nock = require('nock')
const ContaAzul = require('../../src/index')
const client = new ContaAzul({
  accessToken: 'accessToken'
})

describe('Contract', () => {
  it('should get contract by id', async () => {
    nock('https://api.contaazul.com/v1').get('/contracts/31e496ea-39d0-4fe4-b49a-5ee106de47f7').reply(200, {})
    const response = await client.contracts.get('31e496ea-39d0-4fe4-b49a-5ee106de47f7')
    expect(response.status).toBe(200)
  })

  it('should create contract', async () => {
    nock('https://api.contaazul.com/v1').post('/contracts', {
      number: 12,
      emission: '2020-01-25T13:11:31.186Z',
      status: 'string',
      customer_id: 'string',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 800,
          product_id: '85bf00c3-6be7-4fd8-9eef-654d06679a8d',
          value: 0
        }
      ],
      services: [
        {
          description: 'Exchange of Game Atari ET',
          quantity: 800,
          service_id: 'b90bf0f0-05e2-41fb-8619-510eaa8a7b88',
          value: 0
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      due_day: 5,
      duration: 10,
      notes: 'Contract for house rent',
      shipping_cost: 10
    }).reply(201, {})

    const response = await client.contracts.create({
      number: 12,
      emission: '2020-01-25T13:11:31.186Z',
      status: 'string',
      customer_id: 'string',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 800,
          product_id: '85bf00c3-6be7-4fd8-9eef-654d06679a8d',
          value: 0
        }
      ],
      services: [
        {
          description: 'Exchange of Game Atari ET',
          quantity: 800,
          service_id: 'b90bf0f0-05e2-41fb-8619-510eaa8a7b88',
          value: 0
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      due_day: 5,
      duration: 10,
      notes: 'Contract for house rent',
      shipping_cost: 10
    })
    expect(response.status).toBe(201)
  })
})

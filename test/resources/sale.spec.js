/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Sale', () => {
  it('should create sale', async () => {
    nock('https://api.contaazul.com/v1').post('/sales', {
      number: 12,
      emission: '2020-01-25T16:05:57.212Z',
      status: 'COMMITTED',
      customer_id: '62d05442-5e02-4fb3-978b-da7e58e1f770',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 2,
          product_id: 'f8ffb77a-3d52-42d7-9bec-ea38c0ef043d',
          value: 50
        }
      ],
      services: [
        {
          description: 'Fix car engine',
          quantity: 1,
          service_id: 'e78c6d82-501a-4045-90c4-ae5b520f58dc',
          value: 200
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      payment: {
        type: 'CASH',
        installments: [
          {
            number: 1,
            value: 305,
            due_date: '2020-01-25T16:05:57.212Z',
            status: 'PENDING'
          }
        ]
      },
      notes: 'Sale made by noon',
      shipping_cost: 10
    }).reply(201, {})

    const response = await client.sales.create({
      number: 12,
      emission: '2020-01-25T16:05:57.212Z',
      status: 'COMMITTED',
      customer_id: '62d05442-5e02-4fb3-978b-da7e58e1f770',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 2,
          product_id: 'f8ffb77a-3d52-42d7-9bec-ea38c0ef043d',
          value: 50
        }
      ],
      services: [
        {
          description: 'Fix car engine',
          quantity: 1,
          service_id: 'e78c6d82-501a-4045-90c4-ae5b520f58dc',
          value: 200
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      payment: {
        type: 'CASH',
        installments: [
          {
            number: 1,
            value: 305,
            due_date: '2020-01-25T16:05:57.212Z',
            status: 'PENDING'
          }
        ]
      },
      notes: 'Sale made by noon',
      shipping_cost: 10
    })
    expect(response.status).toBe(201)
  })

  it('should update sale', async () => {
    nock('https://api.contaazul.com/v1').put('/sales/70f2c0d9-4e64-439d-8911-cc6f383a29c3', {
      number: 12,
      emission: '2020-01-25T16:05:57.212Z',
      status: 'COMMITTED',
      customer_id: '62d05442-5e02-4fb3-978b-da7e58e1f770',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 2,
          product_id: 'f8ffb77a-3d52-42d7-9bec-ea38c0ef043d',
          value: 50
        }
      ],
      services: [
        {
          description: 'Fix car engine',
          quantity: 1,
          service_id: 'e78c6d82-501a-4045-90c4-ae5b520f58dc',
          value: 200
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      payment: {
        type: 'CASH',
        installments: [
          {
            number: 1,
            value: 305,
            due_date: '2020-01-25T16:05:57.212Z',
            status: 'PENDING'
          }
        ]
      },
      notes: 'Sale made by noon',
      shipping_cost: 10
    }).reply(200, {})

    const response = await client.sales.update('70f2c0d9-4e64-439d-8911-cc6f383a29c3', {
      number: 12,
      emission: '2020-01-25T16:05:57.212Z',
      status: 'COMMITTED',
      customer_id: '62d05442-5e02-4fb3-978b-da7e58e1f770',
      products: [
        {
          description: 'Game Atari ET',
          quantity: 2,
          product_id: 'f8ffb77a-3d52-42d7-9bec-ea38c0ef043d',
          value: 50
        }
      ],
      services: [
        {
          description: 'Fix car engine',
          quantity: 1,
          service_id: 'e78c6d82-501a-4045-90c4-ae5b520f58dc',
          value: 200
        }
      ],
      discount: {
        measure_unit: 'VALUE',
        rate: 5
      },
      payment: {
        type: 'CASH',
        installments: [
          {
            number: 1,
            value: 305,
            due_date: '2020-01-25T16:05:57.212Z',
            status: 'PENDING'
          }
        ]
      },
      notes: 'Sale made by noon',
      shipping_cost: 10
    })
    expect(response.status).toBe(200)
  })

  it('should get sale', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab').reply(200, {})
    const response = await client.sales.get('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(200)
  })

  it('should list sales', async () => {
    nock('https://api.contaazul.com/v1').get('/sales').reply(200, {})
    const response = await client.sales.list()
    expect(response.status).toBe(200)
  })

  it('should list sales by status', async () => {
    nock('https://api.contaazul.com/v1').get('/sales').query({ status: 'PENDING' }).reply(200, {})
    const response = await client.sales.list({ status: 'PENDING' })
    expect(response.status).toBe(200)
  })

  it('should list sale\'s items', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab/items').reply(200, {})
    const response = await client.sales.listItems('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(200)
  })

  it('should get sale\'s installment by number', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/f71e6189-fce6-4e5e-828a-46e96b4c940a/installments/1').reply(200, {})
    const response = await client.sales.getInstallment({
      id: 'f71e6189-fce6-4e5e-828a-46e96b4c940a',
      number: 1
    })
    expect(response.status).toBe(200)
  })

  it('should update sale\'s status installment', async () => {
    nock('https://api.contaazul.com/v1').put('/sales/f71e6189-fce6-4e5e-828a-46e96b4c940a/installments/1', {
      status: 'ACQUITTED'
    }).reply(200, {})
    const response = await client.sales.updateInstallment({
      id: 'f71e6189-fce6-4e5e-828a-46e96b4c940a',
      number: 1,
      status: 'ACQUITTED'
    })
    expect(response.status).toBe(200)
  })

  it('should list sale\'s items by description', async () => {
    nock('https://api.contaazul.com/v1').get('/sales/f71e6189-fce6-4e5e-828a-46e96b4c940a/items').query({
      description: 'Fix car engine',
      page: 0,
      size: 10
    }).reply(200, {})

    const response = await client.sales.listItems('f71e6189-fce6-4e5e-828a-46e96b4c940a', {
      description: 'Fix car engine',
      page: 0,
      size: 10
    })
    expect(response.status).toBe(200)
  })

  it('should delete sale', async () => {
    nock('https://api.contaazul.com/v1').delete('/sales/486d31d7-2320-44d7-aed2-a75f21aa28ab').reply(204, {})
    const response = await client.sales.delete('486d31d7-2320-44d7-aed2-a75f21aa28ab')
    expect(response.status).toBe(204)
  })
})

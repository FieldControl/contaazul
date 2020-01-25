/* eslint-disable no-undef */
const nock = require('nock')
const ContaAzul = require('../../src/index')
const client = new ContaAzul({
  accessToken: 'accessToken'
})

describe('Supplier', () => {
  it('should create supplier', async () => {
    nock('https://api.contaazul.com/v1').post('/suppliers', {
      name: 'John C.',
      company_name: 'John C. Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      person_type: 'NATURAL',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Supplier with two cnpj',
      foreignId: '1234',
      contactName: 'Randy Orton',
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    }).reply(201, {})

    const response = await client.suppliers.create({
      name: 'John C.',
      company_name: 'John C. Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      person_type: 'NATURAL',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Supplier with two cnpj',
      foreignId: '1234',
      contactName: 'Randy Orton',
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    })
    expect(response.status).toBe(201)
  })

  it('should update supplier', async () => {
    nock('https://api.contaazul.com/v1').put('/suppliers/5dda4bcc-abcc-4891-a69d-bff14a481fef', {
      name: 'John C.',
      company_name: 'John C. Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Supplier with two cnpj',
      foreignId: '1234',
      contactName: 'Randy Orton',
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    }).reply(200, {})

    const response = await client.suppliers.update('5dda4bcc-abcc-4891-a69d-bff14a481fef', {
      name: 'John C.',
      company_name: 'John C. Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Supplier with two cnpj',
      foreignId: '1234',
      contactName: 'Randy Orton',
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    })
    expect(response.status).toBe(200)
  })

  it('should get supplier by id', async () => {
    nock('https://api.contaazul.com/v1').get('/suppliers/9a026ed6-1a38-4705-92da-4180ee4d32eb').reply(200, {})
    const response = await client.suppliers.get('9a026ed6-1a38-4705-92da-4180ee4d32eb')
    expect(response.status).toBe(200)
  })

  it('should list suppliers', async () => {
    nock('https://api.contaazul.com/v1').get('/suppliers').reply(200, {})
    const response = await client.suppliers.list()
    expect(response.status).toBe(200)
  })

  it('should delete supplier by id', async () => {
    nock('https://api.contaazul.com/v1').delete('/suppliers/62a31133-3444-43be-bae2-59e84dafe055').reply(204, {})
    const response = await client.suppliers.delete('62a31133-3444-43be-bae2-59e84dafe055')
    expect(response.status).toBe(204)
  })
})

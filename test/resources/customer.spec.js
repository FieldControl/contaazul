/* eslint-disable no-undef */
const nock = require('nock')
const Client = require('../../src/index')
const client = new Client({
  accessToken: 'accessToken'
})

describe('Customers', () => {
  it('should create customer', async () => {
    nock('https://api.contaazul.com/v1').post('/customers', {
      name: 'John C.',
      company_name: 'John Company',
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
      notes: 'Important customer, always wears a green hat',
      contacts: [
        {
          name: 'John C.',
          business_phone: '99 9999-9999',
          email: 'John.C@johncompany.com',
          job_title: 'Developer'
        }
      ],
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    }).reply(201, {})

    const response = await client.customers.create({
      name: 'John C.',
      company_name: 'John Company',
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
      notes: 'Important customer, always wears a green hat',
      contacts: [
        {
          name: 'John C.',
          business_phone: '99 9999-9999',
          email: 'John.C@johncompany.com',
          job_title: 'Developer'
        }
      ],
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

  it('should update customer', async () => {
    nock('https://api.contaazul.com/v1').put('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'John C.',
      company_name: 'John Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Important customer, always wears a green hat',
      enabled: true,
      address: {
        zip_code: '79106-330',
        street: 'Rua Parma',
        number: '224',
        complement: 'Apartamento 2058',
        neighborhood: 'Jardim Itália'
      }
    }).reply(200, {})

    const response = await client.customers.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
      name: 'John C.',
      company_name: 'John Company',
      email: 'john.company@johncompany.com',
      business_phone: '99 99999-9999',
      mobile_phone: '99 99999-9999',
      document: '00011122233',
      identity_document: '00011122233',
      state_registration_number: '00011122233',
      state_registration_type: 'NO_CONTRIBUTOR',
      city_registration_number: '00011122233',
      date_of_birth: '1988-12-23T08:32:10.118-05',
      notes: 'Important customer, always wears a green hat',
      enabled: true,
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

  it('should get customer', async () => {
    nock('https://api.contaazul.com/v1').get('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(200, {})
    const response = await client.customers.get('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should list customers', async () => {
    nock('https://api.contaazul.com/v1').get('/customers').reply(200, {})
    const response = await client.customers.list()
    expect(response.status).toBe(200)
  })

  it('should list customer contacts', async () => {
    nock('https://api.contaazul.com/v1').get('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742/contacts').reply(200, {})
    const response = await client.customers.listContacts('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(200)
  })

  it('should inactivate customer', async () => {
    nock('https://api.contaazul.com/v1').delete('/customers/inactivate/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(204, {})
    const response = await client.customers.inactivate('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(204)
  })

  it('should delete customer', async () => {
    nock('https://api.contaazul.com/v1').delete('/customers/6c91422c-51f4-4f25-8980-a2c0b9295742').reply(204, {})
    const response = await client.customers.delete('6c91422c-51f4-4f25-8980-a2c0b9295742')
    expect(response.status).toBe(204)
  })
})

<div align="center">
  <a target="_blank" href="https://developers.contaazul.com/"><img src=".github/static/logo.png" alt="ContaAzul logo" height="109px"></a>
  <div><code>npm install contaazul --save</code></div>
  <br>
  <p>
    Unofficial Node.js bindings to the ContaAzul API - <a target="_blank" href="https://developers.contaazul.com/">https://developers.contaazul.com/</a>
  </p>
  <p>

![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)
![](https://github.com/FieldControl/contaazul/workflows/Continuous%20Integration/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/03ed222cb6a8f4dd4383/maintainability)](https://codeclimate.com/github/FieldControl/contaazul/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/03ed222cb6a8f4dd4383/test_coverage)](https://codeclimate.com/github/FieldControl/contaazul/test_coverage)

  </p>
  <small>
    Built with ❤ by 
      <a href="https://github.com/FieldControl">FieldControl</a> and
      <a href="https://github.com/FieldControl/contaazul/graphs/contributors">contributors</a> - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=contaazul">We are hiring</a>
  </small>
</div>

---

## Installation

This client is intended for server side use only.

```
npm install contaazul --save
```

<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

## Playground

You can run and watch everything working fine at [bin/playground.js](https://github.com/FieldControl/contaazul/blob/master/bin/playground.js) script

**Note**: You must enter your accessToken before running:

```
node bin/playground.js
```

<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

## Usage

```js
const ContaAzul = require('contaazul')
const client = new ContaAzul({
  accessToken: 'Wx15BlcpBbQyl15y64I0vDfVPWbsTdNX<3'
})
```

<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Resources
- [Product](#product)
- [Service](#service)
- [Customer](#customer)
- [Supplier](#supplier-beta)
- [Contract](#contract-beta)
- [Sale](#sale)

### Product

```js
// Create a product
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
// {
//   "status": 201,
//   "data": {
//     "id": "58a5471a-c121-4c0a-b2f4-1a22d9a34ef9",
//     "name": "Game Atari ET",
//     "value": 100,
//     "cost": 80,
//     "code": "Game-1",
//     "barcode": "501234567890",
//     "available_stock": 1000,
//     "ncm_code": "96140000",
//     "cest_code": "0100300",
//     "net_weight": 10,
//     "gross_weight": 15,
//     "category": {
//       "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//       "name": "Kitchen utensils"
//     }
//   }
// }
```

```js
// Get a product
const response = await client.products.get('c7288c09-829d-48b9-aee2-4f744e380587')
// {
//   "status": 200,
//   "data": {
//     "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//     "name": "Game Atari ET",
//     "value": 100,
//     "cost": 80,
//     "code": "Game-1",
//     "barcode": "501234567890",
//     "available_stock": 1000,
//     "ncm_code": "96140000",
//     "cest_code": "0100300",
//     "net_weight": 10,
//     "gross_weight": 15,
//     "category": {
//       "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//       "name": "Kitchen utensils"
//     }
//   }
// }
```

```js
// Update a product
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
// {
//   "status": 200,
//   "data": {
//     "id": "58a5471a-c121-4c0a-b2f4-1a22d9a34ef9",
//     "name": "Game Atari ET",
//     "value": 100,
//     "cost": 80,
//     "code": "Game-1",
//     "barcode": "501234567890",
//     "available_stock": 1000,
//     "ncm_code": "96140000",
//     "cest_code": "0100300",
//     "net_weight": 10,
//     "gross_weight": 15,
//     "category": {
//       "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//       "name": "Kitchen utensils"
//     }
//   }
// }
```

```js
// List products
const response = await client.products.list({
  name: 'Game Atari ET'
})
// {
//   "status": 200,
//   "data": [
//     {
//       "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//       "name": "Game Atari ET",
//       "value": 100,
//       "cost": 80,
//       "code": "Game-1",
//       "barcode": "501234567890",
//       "available_stock": 1000,
//       "ncm_code": "96140000",
//       "cest_code": "0100300",
//       "net_weight": 10,
//       "gross_weight": 15,
//       "category": {
//         "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//         "name": "Kitchen utensils"
//       }
//     }
//   ]
// }
```

```js
// Delete a product
const response = await client.products.delete('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
// {
//   "status": 204
// }
```

```js
// List product categories
const response = await client.products.listCategories({
  name: "Kitchen utensils",
  page: 1,
  size: 1
})
// {
//   "status": 200,
//   "data": [{
//     "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//     "name": "Kitchen utensils"
//   }]
// }
```

```js
// Get product category
const response = await client.products.getCategory('c7288c09-829d-48b9-aee2-4f744e380587')
// {
//   "status": 200,
//   "data": {
//     "id": "c7288c09-829d-48b9-aee2-4f744e380587",
//     "name": "Kitchen utensils"
//   }
// }
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Product/findById" target="_blank">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Service

```js
// Create a service
const response = await client.services.create({
  name: 'Fix car engine',
  value: 100,
  cost: 80,
  code: 'FIX-ENG-001'
})
// {
//   "status": 201,
//   "data": {
//     "id": "5b25d45f-0364-49de-b626-e277752a082d",
//     "name": "Fix car engine",
//     "value": 100,
//     "cost": 80,
//     "code": "FIX-ENG-001"
//   }
// }
```

```js
// Get a service
const response = await client.services.get('5b25d45f-0364-49de-b626-e277752a082d')
// {
//   "status": 200,
//   "data": {
//     "id": "5b25d45f-0364-49de-b626-e277752a082d",
//     "name": "Fix car engine",
//     "value": 100,
//     "cost": 80,
//     "code": "FIX-ENG-001"
//   }
// }
```

```js
// Update a service
const response = await client.services.update('5b25d45f-0364-49de-b626-e277752a082d', {
  name: 'Fix car engine',
  value: 100,
  cost: 80,
  code: 'FIX-ENG-001'
})
// {
//   "status": 200,
//   "data": {
//     "id": "5b25d45f-0364-49de-b626-e277752a082d",
//     "name": "Fix car engine",
//     "value": 100,
//     "cost": 80,
//     "code": "FIX-ENG-001"
//   }
// }
```

```js
// List services
const response = await client.services.list({ 
  name: 'Fix car engine'
})
// {
//   "status": 200,
//   "data": [
//     {
//       "id": "5b25d45f-0364-49de-b626-e277752a082d",
//       "name": "Fix car engine",
//       "value": 100,
//       "cost": 80,
//       "code": "FIX-ENG-001"
//     }
//   ]
// }
```

```js
// Delete a service
const response = await client.services.delete('6dafd126-be9b-4b58-934f-f2137c1f6489')
// {
//   "status": 204
// }
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Service/delete" target="_blank">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>


### Customer

```js
// Create a customer
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
// {
//   "status": 201,
//   "data": {
//     "id": "45165503-45ac-4f58-8739-74f9a1049d66",
//     "name": "John C.",
//     "company_name": null,
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": null,
//     "date_of_birth": "1988-12-23T13:32:10.118Z",
//     "notes": "Important customer, always wears a green hat",
//     "created_at": "2020-01-25T15:04:03.690Z",
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// List customers
const response = await client.customers.list({
  document: '00011122233'
})
// {
//   "status": 200,
//   "data": [{
//     "id": "45165503-45ac-4f58-8739-74f9a1049d66",
//     "name": "John C.",
//     "company_name": null,
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": null,
//     "date_of_birth": "1988-12-23T13:32:10.118Z",
//     "notes": "Important customer, always wears a green hat",
//     "created_at": "2020-01-25T15:04:03.690Z",
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }]
// }
```

```js
// Get a customer
const response = await client.customers.get('45165503-45ac-4f58-8739-74f9a1049d66')
// {
//   "status": 200,
//   "data": {
//     "id": "45165503-45ac-4f58-8739-74f9a1049d66",
//     "name": "John C.",
//     "company_name": null,
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": null,
//     "date_of_birth": "1988-12-23T03:00:00.000Z",
//     "notes": "Important customer, always wears a green hat",
//     "created_at": "2020-01-25T03:00:00.000Z",
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// List customer contacts
const response = await client.customers.listContacts('45165503-45ac-4f58-8739-74f9a1049d66')
// {
//   "status": 200,
//   "data": [
//     {
//       "name": "John C.",
//       "business_phone": "99 9999-9999",
//       "email": "John.C@johncompany.com",
//       "job_title": "Developer"
//     }
//   ]
// }
```

```js    
// Update a customer
const response = await client.customers.update('45165503-45ac-4f58-8739-74f9a1049d66', {
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
// {
//   "status": 200,
//   "data": {
//     "id": "45165503-45ac-4f58-8739-74f9a1049d66",
//     "name": "John C.",
//     "company_name": null,
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": null,
//     "date_of_birth": "1988-12-23T13:32:10.118Z",
//     "notes": "Important customer, always wears a green hat",
//     "created_at": "2020-01-25T03:00:00.000Z",
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// Inactivate a customer
const response = await client.customers.inactivate('45165503-45ac-4f58-8739-74f9a1049d66')
// {
//   "status": 204
// }
```

```js
// Delete a customer
const response = await client.customers.delete('45165503-45ac-4f58-8739-74f9a1049d66')
// {
//   "status": 204
// }
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Customer/listContacts" target="_blank">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Supplier <sup style="text-decoration: underline;">_beta_</sup>

```js
// Create a supplier
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
// {
//   "status": 201,
//   "data": {
//     "id": "da6fc701-222b-4752-93b1-ad95c43d5034",
//     "name": "John C.",
//     "company_name": "John C. Company",
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": "00011122233",
//     "date_of_birth": "1988-12-23T13:32:10.118Z",
//     "notes": "Supplier with two cnpj",
//     "foreign_id": null,
//     "contact_name": null,
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// List suppliers
const response = await client.suppliers.list({
  company_name: 'John C. Company'
})
// {
//   "status": 200,
//   "data": [
//     {
//       "id": "da6fc701-222b-4752-93b1-ad95c43d5034",
//       "name": "John C.",
//       "company_name": "John C. Company",
//       "email": "john.company@johncompany.com",
//       "business_phone": "99 99999-9999",
//       "mobile_phone": "99 99999-9999",
//       "person_type": "NATURAL",
//       "document": "00011122233",
//       "identity_document": "00011122233",
//       "state_registration_number": "00011122233",
//       "state_registration_type": "NO_CONTRIBUTOR",
//       "city_registration_number": "00011122233",
//       "date_of_birth": "1988-12-23T03:00:00.000Z",
//       "notes": "Supplier with two cnpj",
//       "foreign_id": null,
//       "contact_name": null,
//       "address": {
//         "street": "Rua Parma",
//         "number": "224",
//         "complement": "Apartamento 2058",
//         "zip_code": "79106-330",
//         "neighborhood": "Jardim Itália",
//         "city": {
//           "name": "Campo Grande"
//         },
//         "state": {
//           "name": "MS"
//         }
//       }
//     }
//   ]
// }
```

```js
// Get a supplier
const response = await client.suppliers.get('da6fc701-222b-4752-93b1-ad95c43d5034')
// {
//   "status": 200,
//   "data": {
//     "id": "da6fc701-222b-4752-93b1-ad95c43d5034",
//     "name": "John C.",
//     "company_name": "John C. Company",
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": "00011122233",
//     "date_of_birth": "1988-12-23T03:00:00.000Z",
//     "notes": "Supplier with two cnpj",
//     "foreign_id": null,
//     "contact_name": null,
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// Update a supplier
const response = await client.suppliers.update('da6fc701-222b-4752-93b1-ad95c43d5034', {
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
// {
//   "status": 200,
//   "data": {
//     "id": "da6fc701-222b-4752-93b1-ad95c43d5034",
//     "name": "John C.",
//     "company_name": "John C. Company",
//     "email": "john.company@johncompany.com",
//     "business_phone": "99 99999-9999",
//     "mobile_phone": "99 99999-9999",
//     "person_type": "NATURAL",
//     "document": "00011122233",
//     "identity_document": "00011122233",
//     "state_registration_number": "00011122233",
//     "state_registration_type": "NO_CONTRIBUTOR",
//     "city_registration_number": "00011122233",
//     "date_of_birth": "1988-12-23T13:32:10.118Z",
//     "notes": "Supplier with two cnpj",
//     "foreign_id": null,
//     "contact_name": null,
//     "address": {
//       "street": "Rua Parma",
//       "number": "224",
//       "complement": "Apartamento 2058",
//       "zip_code": "79106-330",
//       "neighborhood": "Jardim Itália",
//       "city": {
//         "name": "Campo Grande"
//       },
//       "state": {
//         "name": "MS"
//       }
//     }
//   }
// }
```

```js
// Delete a supplier
const response = await client.suppliers.delete('da6fc701-222b-4752-93b1-ad95c43d5034')
// {
//   "status": 204
// }
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Customer/listContacts" target="_blank">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Contract <sup style="text-decoration: underline;">_beta_</sup>

```js
// Create a contract
const response = await client.contracts.create({
  number: 12,
  emission: '2020-01-25T14:17:22.725Z',
  status: 'COMMITTED',
  customer_id: '9cf6612f-7401-4944-8cff-986eaf99f3a5',
  products: [
    {
      description: 'Game Atari ET',
      quantity: 800,
      product_id: '89fadd16-ae13-49af-a0fc-c5ae5b3aaace',
      value: 10
    }
  ],
  services: [
    {
      description: 'Fix car engine',
      quantity: 800,
      service_id: '8278d6c4-cac2-4ee5-8f70-deed86384059',
      value: 80
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
// {
//   "status": 201,
//   "data": {
//     "id": "a333a635-a026-44cf-9783-00d9b0c75a49",
//     "number": 1,
//     "emission": "2020-01-25T03:00:00.000Z",
//     "status": "COMMITTED",
//     "customer_id": "9cf6612f-7401-4944-8cff-986eaf99f3a5",
//     "discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "product_discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "service_discount": null,
//     "due_day": 5,
//     "duration": 10,
//     "payment_terms": null,
//     "notes": "Contract for house rent",
//     "shipping_cost": 10
//   }
// }
```


```js
// Get a contract
const response = await client.contracts.get('a333a635-a026-44cf-9783-00d9b0c75a49')
// {
//   "status": 200,
//   "data": {
//     "id": "a333a635-a026-44cf-9783-00d9b0c75a49",
//     "number": 1,
//     "emission": "2020-01-25T03:00:00.000Z",
//     "status": "COMMITTED",
//     "customer_id": "9cf6612f-7401-4944-8cff-986eaf99f3a5",
//     "discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "product_discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "service_discount": null,
//     "due_day": 5,
//     "duration": 10,
//     "payment_terms": null,
//     "notes": "Contract for house rent",
//     "shipping_cost": 10
//   }
// }
```

### Sale

```js
// Create a sale
const response = await client.sales.create({
  number: 12,
  emission: '2020-01-25T16:05:57.212Z',
  status: 'COMMITTED',
  customer_id: '19b2b240-7740-4e6e-b1b6-d44d1b206e1d',
  products: [
    {
      description: 'Game Atari ET',
      quantity: 2,
      product_id: '4563c1a4-c030-4aa9-8401-5b176e6e155e',
      value: 50
    }
  ],
  services: [
    {
      description: 'Fix car engine',
      quantity: 1,
      service_id: 'c64c78b4-579a-4c3c-8633-945d957de05c',
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
// {
//   "status": 201,
//   "data": {
//     "id": "968150ce-d57a-4a97-ab6c-4da83b255f79",
//     "number": 12,
//     "emission": "2020-01-25T03:00:00.000Z",
//     "status": "COMMITTED",
//     "scheduled": false,
//     "customer_id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//     "customer": {
//       "id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//       "name": null,
//       "company_name": null,
//       "email": null,
//       "person_type": null
//     },
//     "discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "product_discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "service_discount": null,
//     "payment": {
//       "type": "CASH",
//       "installments": [
//         {
//           "number": 1,
//           "value": 305,
//           "due_date": "2020-01-25T16:05:57.212Z",
//           "status": "PENDING"
//         }
//       ]
//     },
//     "payment_terms": null,
//     "notes": "Sale made by noon",
//     "shipping_cost": 10,
//     "total": 305,
//     "seller": {
//       "id": null,
//       "name": null
//     }
//   }
// }
```

```js
// List sales
const response = await client.sales.list({
  status: 'COMMITTED',
  customer_id: '19b2b240-7740-4e6e-b1b6-d44d1b206e1d'
})
// {
//   "status": 200,
//   "data": [
//     {
//       "id": "968150ce-d57a-4a97-ab6c-4da83b255f79",
//       "number": 12,
//       "emission": "2020-01-25T03:00:00.000Z",
//       "status": "COMMITTED",
//       "scheduled": false,
//       "customer_id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//       "customer": {
//         "id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//         "name": "John C.",
//         "company_name": null,
//         "email": null,
//         "person_type": "NATURAL"
//       },
//       "discount": {
//         "measure_unit": "VALUE",
//         "rate": 5
//       },
//       "product_discount": {
//         "measure_unit": "VALUE",
//         "rate": 5
//       },
//       "service_discount": null,
//       "payment": {
//         "type": "CASH",
//         "installments": [
//           {
//             "number": 1,
//             "value": 305,
//             "due_date": "2020-01-25T03:00:00.000Z",
//             "status": "PENDING"
//           }
//         ]
//       },
//       "payment_terms": null,
//       "notes": "Sale made by noon",
//       "shipping_cost": 10,
//       "total": 305,
//       "seller": {
//         "id": "f38da1e5-6151-45d0-b108-d7f22d0eaac7",
//         "name": "Luiz Freneda"
//       }
//     }
//   ]
// }
```

```js
// Get a sale
const response = await client.sales.get('968150ce-d57a-4a97-ab6c-4da83b255f79')
// {
//   "status": 200,
//   "data": {
//     "id": "968150ce-d57a-4a97-ab6c-4da83b255f79",
//     "number": 12,
//     "emission": "2020-01-25T03:00:00.000Z",
//     "status": "COMMITTED",
//     "scheduled": false,
//     "customer_id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//     "customer": {
//       "id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//       "name": "John C.",
//       "company_name": null,
//       "email": null,
//       "person_type": "NATURAL"
//     },
//     "discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "product_discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "service_discount": null,
//     "payment": {
//       "type": "CASH",
//       "installments": [
//         {
//           "number": 1,
//           "value": 305,
//           "due_date": "2020-01-25T03:00:00.000Z",
//           "status": "PENDING"
//         }
//       ]
//     },
//     "payment_terms": null,
//     "notes": "Sale made by noon",
//     "shipping_cost": 10,
//     "total": 305,
//     "seller": {
//       "id": null,
//       "name": "Luiz Freneda"
//     }
//   }
// }
```

```js
// Update a sale
const response = await client.sales.update('968150ce-d57a-4a97-ab6c-4da83b255f79', {
  number: 12,
  emission: '2020-01-25T16:05:57.212Z',
  status: 'COMMITTED',
  customer_id: '19b2b240-7740-4e6e-b1b6-d44d1b206e1d',
  products: [
    {
      description: 'Game Atari ET',
      quantity: 2,
      product_id: '4563c1a4-c030-4aa9-8401-5b176e6e155e',
      value: 50
    }
  ],
  services: [
    {
      description: 'Fix car engine',
      quantity: 1,
      service_id: 'c64c78b4-579a-4c3c-8633-945d957de05c',
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
// {
//   "status": 200,
//   "data": {
//     "id": "968150ce-d57a-4a97-ab6c-4da83b255f79",
//     "number": 12,
//     "emission": "2020-01-25T03:00:00.000Z",
//     "status": "COMMITTED",
//     "scheduled": false,
//     "customer_id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//     "customer": {
//       "id": "19b2b240-7740-4e6e-b1b6-d44d1b206e1d",
//       "name": "John C.",
//       "company_name": null,
//       "email": null,
//       "person_type": "NATURAL"
//     },
//     "discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "product_discount": {
//       "measure_unit": "VALUE",
//       "rate": 5
//     },
//     "service_discount": null,
//     "payment": {
//       "type": "CASH",
//       "installments": [
//         {
//           "number": 1,
//           "value": 305,
//           "due_date": "2020-01-25T16:05:57.212Z",
//           "status": "PENDING"
//         }
//       ]
//     },
//     "payment_terms": null,
//     "notes": "Sale made by noon",
//     "shipping_cost": 10,
//     "total": 305,
//     "seller": {
//       "id": "f38da1e5-6151-45d0-b108-d7f22d0eaac7",
//       "name": "Luiz Perez"
//     }
//   }
// }
```

```js
// Get sale's items
const response = await client.sales.listItems('968150ce-d57a-4a97-ab6c-4da83b255f79', {
  description: 'Fix car engine'
})
// {
//   "status": 200,
//   "data": [
//     {
//       "description": "Fix car engine",
//       "quantity": 1,
//       "item": {
//         "id": "59b18bc4-b360-4bde-99ac-9da3183db14e",
//         "name": "Fix car engine",
//         "value": 100,
//         "cost": 80
//       },
//       "itemType": "SERVICE",
//       "value": 200
//     }
//   ]
// }
```

```js
// Get sale's installments
const response = await client.sales.getInstallment({
  id: '968150ce-d57a-4a97-ab6c-4da83b255f79',
  number: 1
})
// {
//   "status": 200,
//   "data": {
//     "number": 1,
//     "value": 305,
//     "due_date": "2020-01-25T03:00:00.000Z",
//     "status": "PENDING"
//   }
// }
```

```js
// Update sale's installment status
const response = await client.sales.updateInstallment({
  id: '968150ce-d57a-4a97-ab6c-4da83b255f79',
  number: 1,
  status: 'ACQUITTED'
})
// {
//   "status": 200,
//   "data": {
//     "number": 1,
//     "value": 305,
//     "due_date": "2020-01-25T03:00:00.000Z",
//     "status": "ACQUITTED"
//   }
// }
```

```js
// Delete a sale
const response = await client.sales.delete('968150ce-d57a-4a97-ab6c-4da83b255f79')
// {
//   "status": 204
// }
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Sale/get" target="_blank">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.
- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.
- **Create topic branches**. Don't ask us to pull from your master branch.
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br/>
  <br/>
  <br/>
  <br/>
</div>

<div align="center">
  <p>
    <sub>
      Open source, from <a href="https://instagram.com/fieldcontrolapp" target="_blank">Field Control</a> with ❤ - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=contaazul">We are hiring!</a>
    </sub>
  </p> 
</div>
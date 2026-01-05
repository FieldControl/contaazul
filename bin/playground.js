const ContaAzul = require('./../src/index')
const client = new ContaAzul({
  accessToken: ''
})

const print = (response) => {
  console.log(JSON.stringify(response, null, 2))
}

const run = async () => {
  console.log('')
  console.log('Product')
  console.log('list product categories')
  const listCategoriesResponse = await client.products.listCategories({
    page: 1,
    size: 10
  })
  print(listCategoriesResponse)

  if (listCategoriesResponse.data.length) {
    console.log('get product category by id')
    const getCategoryResponse = await client.products.getCategory(listCategoriesResponse.data[0].id)
    print(getCategoryResponse)
  }

  console.log('create a product')
  const createProductResponse = await client.products.create({
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
  print(createProductResponse)

  console.log(`get product by id ${createProductResponse.data.id}`)
  const getProductResponse = await client.products.get(createProductResponse.data.id)
  print(getProductResponse)

  console.log(`update ${createProductResponse.data.id} product`)
  const updateProductResponse = await client.products.update(createProductResponse.data.id, {
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
  print(updateProductResponse)

  console.log('list products')
  const listProductsResponse = await client.products.list({
    name: 'Game Atari ET'
  })
  print(listProductsResponse)

  console.log(`delete ${createProductResponse.data.id} product..`)
  const deleteProductResponse = await client.products.delete(createProductResponse.data.id)
  print(deleteProductResponse)

  console.log('')
  console.log('Service')
  console.log('create a service')
  const createServiceResponse = await client.services.create({
    name: 'Fix car engine',
    value: 100,
    cost: 80,
    code: 'FIX-ENG-001'
  })
  print(createServiceResponse)

  console.log('list services')
  const listServicesResponse = await client.services.list({
    name: 'Fix car engine'
  })
  print(listServicesResponse)

  console.log(`get services id ${createServiceResponse.data.id}`)
  const getServiceResponse = await client.services.get(createServiceResponse.data.id)
  print(getServiceResponse)

  console.log(`update service id ${createServiceResponse.data.id}`)
  const updateServiceResponse = await client.services.update(createServiceResponse.data.id, {
    name: 'Fix car engine',
    value: 100,
    cost: 80,
    code: 'FIX-ENG-001'
  })
  print(updateServiceResponse)

  console.log(`delete service id ${createServiceResponse.data.id}`)
  const deleteServiceResponse = await client.services.delete(createServiceResponse.data.id)
  print(deleteServiceResponse)

  console.log('')
  console.log('Customer')
  console.log('create a customer')
  const createCustomerResponse = await client.customers.create({
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
  print(createCustomerResponse)

  console.log('list customers')
  const listCustomersResponse = await client.services.list({
    document: '00011122233'
  })
  print(listCustomersResponse)

  console.log(`get customer id ${createCustomerResponse.data.id}`)
  const getCustomerResponse = await client.customers.get(createCustomerResponse.data.id)
  print(getCustomerResponse)

  console.log(`list customer id ${createCustomerResponse.data.id} contacts`)
  const listCustomerContactsResponse = await client.customers.listContacts(createCustomerResponse.data.id)
  print(listCustomerContactsResponse)

  console.log(`update customer id ${createCustomerResponse.data.id}`)
  const updateCustomerResponse = await client.customers.update(createCustomerResponse.data.id, {
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
  print(updateCustomerResponse)

  console.log(`inactivating customer id ${createCustomerResponse.data.id}`)
  const inactivateCustomerResponse = await client.customers.inactivate(createCustomerResponse.data.id)
  print(inactivateCustomerResponse)

  console.log(`delete customer id ${createCustomerResponse.data.id}`)
  const deleteCustomerResponse = await client.customers.delete(createCustomerResponse.data.id)
  print(deleteCustomerResponse)

  console.log('')
  console.log('Supplier (beta)')
  console.log('create a supplier')
  const createSupplierResponse = await client.suppliers.create({
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
  print(createSupplierResponse)

  console.log('list suppliers')
  const listSuppliersResponse = await client.suppliers.list({
    company_name: 'John C. Company'
  })
  print(listSuppliersResponse)

  console.log(`get supplier id ${createSupplierResponse.data.id}`)
  const getSupplierResponse = await client.suppliers.get(createSupplierResponse.data.id)
  print(getSupplierResponse)

  console.log(`update supplier id ${createSupplierResponse.data.id}`)
  const updateSupplierResponse = await client.suppliers.update(createSupplierResponse.data.id, {
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
  print(updateSupplierResponse)

  console.log(`delete supplier id ${createSupplierResponse.data.id}`)
  const deleteSupplierResponse = await client.suppliers.delete(createSupplierResponse.data.id)
  print(deleteSupplierResponse)

  console.log('')
  console.log('Contract (beta)')
  const contractProductResponse = await client.products.create({
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

  const contractServiceResponse = await client.services.create({
    name: 'Fix car engine',
    value: 100,
    cost: 80
  })

  const contractCustomerResponse = await client.customers.create({
    name: 'John C.',
    person_type: 'NATURAL'
  })

  console.log('create a contract')
  const createContractResponse = await client.contracts.create({
    number: 12,
    emission: '2020-01-25T14:17:22.725Z',
    status: 'COMMITTED',
    customer_id: contractCustomerResponse.data.id,
    products: [
      {
        description: 'Game Atari ET',
        quantity: 800,
        product_id: contractProductResponse.data.id,
        value: 10
      }
    ],
    services: [
      {
        description: 'Fix car engine',
        quantity: 800,
        service_id: contractServiceResponse.data.id,
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
  print(createContractResponse)

  console.log(`get contract id ${createContractResponse.data.id}`)
  const getContractResponse = await client.contracts.get(createContractResponse.data.id)
  print(getContractResponse)

  await client.products.delete(contractProductResponse.data.id)
  await client.services.delete(contractServiceResponse.data.id)
  await client.customers.delete(contractCustomerResponse.data.id)

  console.log('')
  console.log('Sale')

  const saleProductResponse = await client.products.create({
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

  const saleServiceResponse = await client.services.create({
    name: 'Fix car engine',
    value: 100,
    cost: 80
  })

  const saleCustomerResponse = await client.customers.create({
    name: 'John C.',
    person_type: 'NATURAL'
  })

  console.log('create a sale')
  const createSaleResponse = await client.sales.create({
    number: 12,
    emission: '2020-01-25T16:05:57.212Z',
    status: 'COMMITTED',
    customer_id: saleCustomerResponse.data.id,
    products: [
      {
        description: 'Game Atari ET',
        quantity: 2,
        product_id: saleProductResponse.data.id,
        value: 50
      }
    ],
    services: [
      {
        description: 'Fix car engine',
        quantity: 1,
        service_id: saleServiceResponse.data.id,
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
  print(createSaleResponse)

  console.log('list sales')
  const listSalesResponse = await client.sales.list({
    status: 'COMMITTED',
    customer_id: saleCustomerResponse.data.id
  })
  print(listSalesResponse)

  console.log(`get sale id ${createSaleResponse.data.id}`)
  const getSaleResponse = await client.sales.get(createSaleResponse.data.id)
  print(getSaleResponse)

  console.log(`update sale id ${createSaleResponse.data.id}`)
  const updateSaleResponse = await client.sales.update(createSaleResponse.data.id, {
    number: 12,
    emission: '2020-01-25T16:05:57.212Z',
    status: 'COMMITTED',
    customer_id: saleCustomerResponse.data.id,
    products: [
      {
        description: 'Game Atari ET',
        quantity: 2,
        product_id: saleProductResponse.data.id,
        value: 50
      }
    ],
    services: [
      {
        description: 'Fix car engine',
        quantity: 1,
        service_id: saleServiceResponse.data.id,
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
  print(updateSaleResponse)

  console.log('get sale\'s installment by number')
  const getInstallmentSaleResponse = await client.sales.getInstallment({
    id: createSaleResponse.data.id,
    number: 1
  })
  print(getInstallmentSaleResponse)

  console.log('update sale\'s installment status')
  const updateInstallmentSaleResponse = await client.sales.updateInstallment({
    id: createSaleResponse.data.id,
    number: 1,
    status: 'ACQUITTED'
  })
  print(updateInstallmentSaleResponse)

  console.log('list sales items by filters')
  const listItemsSaleResponse = await client.sales.listItems(createSaleResponse.data.id, {
    description: 'Fix car engine'
  })
  print(listItemsSaleResponse)

  console.log(`delete sale id ${createSaleResponse.data.id}`)
  const deleteSaleResponse = await client.sales.delete(createSaleResponse.data.id)
  print(deleteSaleResponse)

  await client.products.delete(saleProductResponse.data.id)
  await client.services.delete(saleServiceResponse.data.id)
  await client.customers.delete(saleCustomerResponse.data.id)

  const { data: products } = await client.products.list()
  for (const product of products) {
    await client.products.delete(product.id)
  }
}

run()

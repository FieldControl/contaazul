class Customer {
  constructor (client) {
    this.client = client
  }

  create (customer) {
    delete customer.id
    return this.client.post('customers', customer)
  }

  get (id) {
    return this.client.get(`customers/${id}`)
  }

  list (params = {}) {
    return this.client.get('customers', params)
  }

  update (id, customer) {
    return this.client.put(`customers/${id}`, customer)
  }

  delete (id) {
    return this.client.delete(`customers/${id}`)
  }

  inactivate (id) {
    return this.client.delete(`customers/inactivate/${id}`)
  }

  listContacts (id, params = {}) {
    return this.client.get(`customers/${id}/contacts`, params)
  }
}

module.exports = Customer

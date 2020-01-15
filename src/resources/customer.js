class Customer {
  constructor (client) {
    this.client = client
  }

  contacts (id) {
    return this.client.get(`customers/${id}/contacts`)
  }

  inactivate (id) {
    return this.client.delete(`customers/inactivate/${id}`)
  }

  delete (id) {
    return this.client.delete(`customers/${id}`)
  }

  get (id) {
    return this.client.get(`customers/${id}`)
  }

  update (id, contact) {
    return this.client.put(`customers/${id}`, contact)
  }

  list (params = {}) {
    return this.client.get('customers', params)
  }

  create (contact) {
    delete contact.id
    return this.client.post('customers', contact)
  }
}

module.exports = Customer

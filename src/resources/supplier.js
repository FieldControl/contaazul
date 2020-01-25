class Supplier {
  constructor (client) {
    this.client = client
  }

  create (supplier) {
    delete supplier.id
    return this.client.post('suppliers', supplier)
  }

  get (id) {
    return this.client.get(`suppliers/${id}`)
  }

  list (params = {}) {
    return this.client.get('suppliers', params)
  }

  update (id, supplier) {
    return this.client.put(`suppliers/${id}`, supplier)
  }

  delete (id) {
    return this.client.delete(`suppliers/${id}`)
  }
}

module.exports = Supplier

class Sale {
  constructor (client) {
    this.client = client
  }

  items (id) {
    return this.client.get(`sales/${id}/items`)
  }

  delete (id) {
    return this.client.delete(`sales/${id}`)
  }

  get (id) {
    return this.client.get(`sales/${id}`)
  }

  update (id, sale) {
    return this.client.put(`sales/${id}`, sale)
  }

  list (params = {}) {
    return this.client.get('sales', params)
  }

  create (sale) {
    delete sale.id
    return this.client.post('sales', sale)
  }
}

module.exports = Sale

class Sale {
  constructor (client) {
    this.client = client
  }

  create (sale) {
    delete sale.id
    return this.client.post('sales', sale)
  }

  get (id) {
    return this.client.get(`sales/${id}`)
  }

  list (params = {}) {
    return this.client.get('sales', params)
  }

  update (id, sale) {
    return this.client.put(`sales/${id}`, sale)
  }

  delete (id) {
    return this.client.delete(`sales/${id}`)
  }

  listItems (id, params = {}) {
    return this.client.get(`sales/${id}/items`, params)
  }

  getInstallment ({ id, number }) {
    return this.client.get(`sales/${id}/installments/${number}`)
  }

  updateInstallment ({ id, number, status }) {
    return this.client.put(`sales/${id}/installments/${number}`, {
      status
    })
  }
}

module.exports = Sale

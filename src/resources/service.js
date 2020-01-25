class Service {
  constructor (client) {
    this.client = client
  }

  create (service) {
    delete service.id
    return this.client.post('services', service)
  }

  get (id) {
    return this.client.get(`services/${id}`)
  }

  list (params = {}) {
    return this.client.get('services', params)
  }

  update (id, service) {
    return this.client.put(`services/${id}`, service)
  }

  delete (id) {
    return this.client.delete(`services/${id}`)
  }
}

module.exports = Service

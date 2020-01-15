class Service {
  constructor (client) {
    this.client = client
  }

  delete (id) {
    return this.client.delete(`services/${id}`)
  }

  get (id) {
    return this.client.get(`services/${id}`)
  }

  update (id, service) {
    return this.client.put(`services/${id}`, service)
  }

  list (params = {}) {
    return this.client.get('services', params)
  }

  create (service) {
    delete service.id
    return this.client.post('services', service)
  }
}

module.exports = Service

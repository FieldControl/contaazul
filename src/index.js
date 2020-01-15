const axios = require('axios')
const baseUrl = 'https://api.contaazul.com/v1'
const { Customer, Product, Sale, Service } = require('./resources')

class ContaAzulClient {
  constructor ({ accessToken }) {
    this.headers = {
      Authorization: `Bearer ${accessToken}`
    }
    this.customers = new Customer(this)
    this.products = new Product(this)
    this.sales = new Sale(this)
    this.services = new Service(this)
  }

  get (resourceUri, params = {}) {
    return axios.get(`${baseUrl}/${resourceUri}`, {
      params: params,
      headers: this.headers
    })
  }

  post (resourceUri, payload) {
    return axios.post(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    })
  }

  put (resourceUri, payload) {
    return axios.put(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    })
  }

  delete (resourceUri) {
    return axios.delete(`${baseUrl}/${resourceUri}`, {
      headers: this.headers
    })
  }
}

module.exports = ContaAzulClient

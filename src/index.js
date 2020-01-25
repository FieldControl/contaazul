const axios = require('axios')
const baseUrl = 'https://api.contaazul.com/v1'
const { Customer, Product, Sale, Service, Contract, Supplier } = require('./resources')

const responseWith = (response) => ({
  status: response.status,
  data: response.data || undefined
})

const responseErrWith = (err) => ({
  status: err.response.status,
  data: err.response.data || undefined
})

class Client {
  constructor ({ accessToken }) {
    this.headers = {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'contaazul/1.0.0 - unofficial node bindings'
    }
    this.customers = new Customer(this)
    this.products = new Product(this)
    this.sales = new Sale(this)
    this.services = new Service(this)
    this.contracts = new Contract(this)
    this.suppliers = new Supplier(this)
  }

  get (resourceUri, params = {}) {
    return axios.get(`${baseUrl}/${resourceUri}`, {
      params: params,
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  post (resourceUri, payload) {
    return axios.post(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  put (resourceUri, payload) {
    return axios.put(`${baseUrl}/${resourceUri}`, payload, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }

  delete (resourceUri) {
    return axios.delete(`${baseUrl}/${resourceUri}`, {
      headers: this.headers
    }).then(responseWith).catch(responseErrWith)
  }
}

module.exports = Client

class Contract {
  constructor (client) {
    this.client = client
  }

  create (contract) {
    delete contract.id
    return this.client.post('contracts', contract)
  }

  get (id) {
    return this.client.get(`contracts/${id}`)
  }
}

module.exports = Contract

class Product {
  constructor (client) {
    this.client = client
  }

  create (product) {
    delete product.id
    return this.client.post('products', product)
  }

  get (id) {
    return this.client.get(`products/${id}`)
  }

  list (params = {}) {
    return this.client.get('products', params)
  }

  update (id, product) {
    return this.client.put(`products/${id}`, product)
  }

  delete (id) {
    return this.client.delete(`products/${id}`)
  }

  getCategory (id) {
    return this.client.get(`product-categories/${id}`)
  }

  listCategories (params = {}) {
    return this.client.get('product-categories', params)
  }
}

module.exports = Product

class Product {
  constructor (client) {
    this.client = client
  }

  getCategory (id) {
    return this.client.get(`product-categories/${id}`)
  }

  listCategories (params = {}) {
    return this.client.get('product-categories', params)
  }

  delete (id) {
    return this.client.delete(`products/${id}`)
  }

  get (id) {
    return this.client.get(`products/${id}`)
  }

  update (id, product) {
    return this.client.put(`products/${id}`, product)
  }

  list (params = {}) {
    return this.client.get('products', params)
  }

  create (product) {
    delete product.id
    return this.client.post('products', product)
  }
}

module.exports = Product

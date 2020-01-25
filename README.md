<div align="center">
  <a href="https://developers.contaazul.com/"><img src=".github/static/logo.png" alt="ContaAzul logo" height="160"></a>
  <div><code>npm install contaazul --save</code></div>
  <br>
  <p>
    ContaAzul, unofficial Node.js bindings to the ContaAzul API - <a href="https://developers.contaazul.com/">Docs</a>
  </p>
  <p>

![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)
![](https://github.com/FieldControl/contaazul/workflows/Continuous%20Integration/badge.svg)

  </p>
  <p>
    Built with ❤︎ by 
      <a href="https://github.com/FieldControl">FieldControl</a> e
      <a href="https://github.com/FieldControl/contaazul/graphs/contributors">contributors</a>
  </p>
</div>

---

### Customer

```js
const response = await client.customers.contacts('6c91422c-51f4-4f25-8980-a2c0b9295742')
```

```js
const response = await client.customers.inactivate('6c91422c-51f4-4f25-8980-a2c0b9295742')
```

```js
const response = await client.customers.delete('6c91422c-51f4-4f25-8980-a2c0b9295742')
```

```js
const response = await client.customers.get('6c91422c-51f4-4f25-8980-a2c0b9295742')
```

```js    
const response = await client.customers.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
    name: 'Tony Stark'
})
```

```js
const response = await client.customers.list()
```

```js
const response = await client.customers.create({
    name: 'Steve Rogers',
    person_type: 'NATURAL'
})
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Customer/listContacts">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Sale

```js
const response = await client.sales.items('486d31d7-2320-44d7-aed2-a75f21aa28ab')
```

```js
const response = await client.sales.delete('486d31d7-2320-44d7-aed2-a75f21aa28ab')
```

```js
const response = await client.sales.get('486d31d7-2320-44d7-aed2-a75f21aa28ab')
```

```js
const response = await client.sales.update('70f2c0d9-4e64-439d-8911-cc6f383a29c3', { 
  number: 12 
})
```

```js
const response = await client.sales.list({ 
  status: 'PENDING' 
})
```

```js
const response = await client.sales.list()
```

```js
const response = await client.sales.create({
  status: 'PENDING',
  emission: '2019-11-29T12:20:55.207Z',
  payment: {
    type: 'CASH',
    installments: [{
      number: 1,
      value: 300,
      due_date: '2019-11-29T12:20:55.207Z'
    }]
  }
})
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Sale/get">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>


### Service

```js
const response = await client.services.delete('6dafd126-be9b-4b58-934f-f2137c1f6489')
```

```js
const response = await client.services.get('6dafd126-be9b-4b58-934f-f2137c1f6489')
```

```js
const response = await client.services.update('197e9028-cb31-4fb1-8425-6fd54ec788ac', {
  name: 'Troca de bateria'
})
```

```js
const response = await client.services.list()
```

```js
const response = await client.services.list({ 
  name: 'Limpeza de quarto' 
})
```

```js
const response = await client.services.create({
  name: 'Reparo Mouse',
  value: 50,
  code: 'mouse-repair'
})
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Service/delete">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>

### Product

```js
const response = await client.products.getCategory('1ffc4a8d-af0a-4d2d-91f5-35adbee6e1ff')
```

```js
const response = await client.products.listCategories()
```

```js
const response = await client.products.listCategories({
  name: 'Outros insumos'
})
```

```js
const response = await client.products.delete('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
```

```js
const response = await client.products.get('f059d668-a4e3-45e8-9cac-be30e6ea3b53')
```

```js
const response = await client.products.update('6c91422c-51f4-4f25-8980-a2c0b9295742', {
  name: 'Playstation 4 PRO'
})
```

```js
const response = await client.products.create({
  name: 'Playstation 4',
  value: 2500,
  code: 'ps4'
})
```

```js
const response = await client.products.list()
```

```js
const response = await client.products.list({
  name: 'Xbox'
})
```

<div align="right">
  <a href="https://developers.contaazul.com/#!/Product/findById">see docs</a>
</div>
<div align="center">
  <img height="30px" src=".github/static/separator.png"/>
</div>
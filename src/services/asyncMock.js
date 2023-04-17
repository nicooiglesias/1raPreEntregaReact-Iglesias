const products = [
    {   id: 1,
        nombre: "Remeras billabong",
        categoria: "Remeras",
        precio: 6000,
        stock: 12,
        img: '/1raPreEntregaReact-Iglesias/images/remeraBillabong.jpg'
    } ,
    {   id: 2,
        nombre: "Bermuda",
        categoria: "Bermudas",
        precio: 8000,
        stock: 12,
        img: "https://quiksilver.cl/medias/QUIKSILVER-QSEQYWS0369857-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wxOTUxNzZ8aW1hZ2UvanBlZ3xoNWQvaDgxLzkyNjIxODM3MTA3NTAvUVVJS1NJTFZFUl9RU0VRWVdTMDM2OTg1N19WSUVXMS5qcGd8MzhjY2M2OTEwZmNhNjcwNjlkOGMzZGI2ZWQ3MjNjMzRjZDQzMjlhMzZiZjU0NDhjNWM5NWUyYzYzYmYxMDE0NQ"
    } ,
    {   id: 3,
        nombre: "Zapatillas Nike",
        categoria: "Zapatillas",
        precio: 12000,
        stock: 12,
        img: "https://essential.vtexassets.com/arquivos/ids/165152-1200-auto?v=636664753420630000&width=1200&height=auto&aspect=true"
    },
    {   id: 4,
        nombre: "Jeans Levis",
        categoria: "Jeans",
        precio: 14000,
        stock: 12,
        "img": '/1raPreEntregaReact-Iglesias/images/jeansBillabong.jpg'
    }
]
export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      },500)
  })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === parseInt(productId)))
      },500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.categoria === categoryId))
      },500)
  })
}
import { useEffect, useState } from "react" 
import { Card } from "../../components/Card"
import { Container } from "./styles"

const url = "https://dummyjson.com/products/category"

export function ResultsCategory({ categories }) {
  const [products, serProducts] = useState([])

  const getCategories = async (categories) => {
    const res = await fetch(`${url}/${categories}`)
    const data = await res.json()

    serProducts(data.products)
  }

  useEffect(() => {
    getCategories(categories)
  }, [])

  return (
    <Container>
      {products.map((product, index) => (
        <Card key={index} id={product.id} title={product.title} rating={product.rating} price={product.price} thumbnail={product.thumbnail} discount={product.discountPercentage} />
      ))}
    </Container>
  )
}

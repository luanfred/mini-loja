import { useState, useEffect } from "react"
import { Card } from "../../components/Card/index"
import { Container } from "./styles"


const url = "https://dummyjson.com/products"

export function Home() {

  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const res = await fetch(url)
    const data = await res.json()

    setProducts(data.products)
  }
  
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Container>
      {products.map((data, index) => (
        <Card key={index} id={data.id} title={data.title} rating={data.rating} price={data.price} thumbnail={data.thumbnail} discount={data.discountPercentage} />
      ))}
    </Container>
  )
}
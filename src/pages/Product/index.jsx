import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { VscArrowDown } from "react-icons/vsc";

import {
  Container,
  ContainerColor,
  ContainerData,
  ContainerImg,
  Img,
  PriceTotal,
} from "./styles";

const url = "https://dummyjson.com/products"

export function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  const getProduct = async (id) => {
    const res = await fetch(`${url}/${id}`)
    const data = await res.json()

    setProduct(data)
  }

  useEffect(() => {
    getProduct(id)
  }, [])


  return (
    <Container>
      <ContainerColor>
        <ContainerImg>
          <Img src={product.thumbnail} alt="img" />
        </ContainerImg>
        <ContainerData>
          <span>{product.title}</span>
          <span>Avaliações {product.rating}</span>
          <PriceTotal>
            <span className="priceTotal">R$ {product.price + product.discountPercentage}</span>
            <span className="discounts"><VscArrowDown /> {product.discountPercentage} %</span>
          </PriceTotal>
          <h3>R$ {product.price}</h3>
          <p>em 1x no cartão de crédito</p>
          <p>{product.description}</p>
        </ContainerData>
      </ContainerColor>
    </Container >
  )
}

import {
  Container,
  ContainerData,
  ContainerImg,
  FormPayment,
  Img,
  NameProduct,
  Price,
  PriceTotal,
  Rating,
} from "./styles";
import { VscArrowDown } from "react-icons/vsc";
import { Link } from "react-router-dom";


export function Card({ id, title, rating, discount, thumbnail, price }) {
  return (
    <Container>
      <ContainerImg>
        <Img src={thumbnail} alt="img" />
      </ContainerImg>
      <ContainerData>
        <NameProduct>{title}</NameProduct>
        <Rating>Avaliações {rating}</Rating>

        <PriceTotal>
          <span className="priceTotal">R$ {price + discount}</span>
          <span className="discounts"><VscArrowDown />{discount}</span>
        </PriceTotal>
        <Price>R$ {price}</Price>
        <FormPayment>em 1x no cartão de crédito</FormPayment>
        <Link to={{pathname: `/product/${id}`}} className="button">
          Detalhes
        </Link>
      </ContainerData>
    </Container >
  )
}

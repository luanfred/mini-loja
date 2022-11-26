import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Categories() {

  return (
    <Container>
      <div className="one">
        <Link to="/category/smartphones/">Smartphones</Link>
        <Link to="/category/laptops">Notebooks</Link>
        <Link to="/category/fragrances">Fragrâncias</Link>
        <Link to="/category/skincare">Cuidados com a pele</Link>
        <Link to="/category/groceries">Mantimentos</Link>
        <Link to="/category/home-decoration">Decoração de casa</Link>
        <Link to="/category/furniture">Mobiliário</Link>
        <Link to="/category/tops">Tops</Link>
        <Link to="/category/womens-dresses">Vestidos de mulher</Link>
        <Link to="/category/womens-shoes">Sapatos femininos</Link>

      </div>
      <div className="two">
        <Link to="/category/mens-shirts">Camisas masculinas</Link>
        <Link to="/category/mens-shoes">Sapatos masculinos</Link>
        <Link to="/category/mens-watches">Relógios masculinos</Link>
        <Link to="/category/womens-watches">Relogios femininos</Link>
        <Link to="/category/womens-bags">Bolsas de mulher</Link>
        <Link to="/category/womens-jewellery">Joalharia mulher</Link>
        <Link to="/category/sunglasses">Oculos escuros</Link>
        <Link to="/category/automotive">Automotivo</Link>
        <Link to="/category/motorcycle">Motocicleta</Link>
        <Link to="/category/lighting">Iluminação</Link>
      </div>
    </Container>
  )
}

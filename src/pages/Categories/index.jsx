import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Categories() {

  return (
    <Container>
      <nav>
        <ul>
          <li><Link to="/category/smartphones/">Smartphones</Link></li>
          <li><Link to="/category/laptops">Notebooks</Link></li>
          <li><Link to="/category/fragrances">Fragrâncias</Link></li>
          <li><Link to="/category/skincare">Cuidados com a pele</Link></li>
          <li><Link to="/category/groceries">Mantimentos</Link></li>
          <li><Link to="/category/home-decoration">Decoração de casa</Link></li>
          <li><Link to="/category/furniture">Mobiliário</Link></li>
          <li><Link to="/category/tops">Tops</Link></li>
          <li><Link to="/category/womens-dresses">Vestidos de mulher</Link></li>
          <li><Link to="/category/womens-shoes">Sapatos femininos</Link></li>
          <li><Link to="/category/mens-shirts">Camisas masculinas</Link></li>
          <li><Link to="/category/mens-shoes">Sapatos masculinos</Link></li>
          <li><Link to="/category/mens-watches">Relógios masculinos</Link></li>
          <li><Link to="/category/womens-watches">Relogios femininos</Link></li>
          <li><Link to="/category/womens-bags">Bolsas de mulher</Link></li>
          <li><Link to="/category/womens-jewellery">Joalharia mulher</Link></li>
          <li><Link to="/category/sunglasses">Oculos escuros</Link></li>
          <li><Link to="/category/automotive">Automotivo</Link></li>
          <li><Link to="/category/motorcycle">Motocicleta</Link></li>
          <li><Link to="/category/lighting">Iluminação</Link></li>
        </ul>
      </nav>
    </Container>
  )
}

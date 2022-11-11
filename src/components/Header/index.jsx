import { Link } from "react-router-dom";
import { Container, ContainerSearch, Form, Input, Button } from "./styles";

//const urlSearch = "https://dummyjson.com/products/search?q="

export function Header() {


  return (
    <Container>
      <Link to="/" className="logo">
          STORE
      </Link>
      <ContainerSearch>
        <Link to="/categorias" className="categorias">
          Categorias
        </Link>
        {/* <Form>
          <Input type="text" placeholder="buscar..." />
        </Form> */}
      </ContainerSearch>
    </Container>
  )
}

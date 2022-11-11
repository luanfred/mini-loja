import { GlobalStyle } from "./styles/global"
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home/index'
import { Categories } from './pages/Categories'
import { Header } from './components/Header'
import { ResultsCategory } from "./pages/ResultsCategory"
import { Product } from "./pages/Product"


export function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="category/smartphones" element={<ResultsCategory categories="smartphones" />} />
        <Route path="/category/laptops" element={< ResultsCategory categories="laptops" />} />
        <Route path="/category/fragrances" element={< ResultsCategory categories="fragrances" />} />
        <Route path="/category/skincare" element={< ResultsCategory categories="skincare" />} />
        <Route path="/category/groceries" element={< ResultsCategory categories="groceries" />} />
        <Route path="/category/home-decoration" element={< ResultsCategory categories="home-decoration" />} />
        <Route path="/category/furniture" element={< ResultsCategory categories="furniture" />} />
        <Route path="/category/tops" element={< ResultsCategory categories="tops" />} />
        <Route path="/category/womens-dresses" element={< ResultsCategory categories="womens-dresses" />} />
        <Route path="/category/womens-shoes" element={< ResultsCategory categories="womens-shoes" />} />
        <Route path="/category/mens-shirts" element={< ResultsCategory categories="mens-shirts" />} />
        <Route path="/category/mens-shoes" element={< ResultsCategory categories="mens-shoes" />} />
        <Route path="/category/mens-watches" element={< ResultsCategory categories="mens-watches" />} />
        <Route path="/category/womens-watches" element={< ResultsCategory categories="womens-watches" />} />
        <Route path="/category/womens-bags" element={< ResultsCategory categories="womens-bags" />} />
        <Route path="/category/womens-jewellery" element={< ResultsCategory categories="womens-jewellery" />} />
        <Route path="/category/sunglasses" element={< ResultsCategory categories="sunglasses" />} />
        <Route path="/category/automotive" element={< ResultsCategory categories="automotive" />} />
        <Route path="/category/motorcycle" element={< ResultsCategory categories="motorcycle" />} />
        <Route path="/category/lighting" element={< ResultsCategory categories="lighting" />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  )
}



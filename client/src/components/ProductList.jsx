import styled from "styled-components";
import axios from "axios";
// import { popularProducts } from "../data.js";
import Product from "./Product";
import { mobile } from "../responsive.js";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ width: "100vw" })}
`;

const ProductList = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value))
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "ascPrice") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "descPrice") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  console.log(cat, filters, sort);
  return (
    <Container>
      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.slice(0, 8).map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
export default ProductList;

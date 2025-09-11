import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
    </div>
  );
};
export default Home;

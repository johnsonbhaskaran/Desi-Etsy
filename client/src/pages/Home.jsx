import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter.jsx";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
    </div>
  );
};
export default Home;

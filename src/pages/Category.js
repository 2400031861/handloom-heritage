import { useParams } from "react-router-dom";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Category = () => {
  const { name } = useParams();
  const filtered = products.filter(p => p.category === name);

  return (
    <>
      <Navbar />
      <div className="grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
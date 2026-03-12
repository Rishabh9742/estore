import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return (
    <div>

      <SearchBar setSearch={setSearch} />

      <div className="container">

        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              name: p.title,
              price: p.price,
              image: p.image
            }}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;
import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const categories = [
    "all",
    ...new Set(products.map(p => p.category))
  ];

  const filtered = products.filter(p => {

    const matchSearch =
      p.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "all" ||
      p.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <div className="home-layout">

      {/* sidebar */}

      <div className="sidebar">

        <h3>Categories</h3>

        {categories.map(c => (

          <button
            key={c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>

        ))}

      </div>


      {/* main */}

      <div className="main">

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

    </div>

  );
}

export default Home;
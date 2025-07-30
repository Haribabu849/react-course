import React from "react";
import { useSearchParams } from "react-router-dom";

const productsData = [
  { id: 1, name: "apple", price: 100, category: "fruit" },
  { id: 2, name: "orange", price: 200, category: "fruit" },
  { id: 3, name: "mango", price: 300, category: "fruit" },
  { id: 4, name: "carrot", price: 50, category: "vegetable" },
  { id: 5, name: "broccoli", price: 80, category: "vegetable" },
  { id: 6, name: "spinach", price: 60, category: "vegetable" },
];
const SearchParams = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = React.useState(productsData);
  const category = SearchParams.get("category") || "all";
  console.log(SearchParams.get("anotherData"));
  console.log(category);

  React.useEffect(() => {
    if (category !== "all") {
      setProducts(
        productsData.filter((product) => product.category === category)
      );
    } else {
      setProducts(productsData);
    }
  }, [category]);

  return (
    <div>
      <h1>Search Products</h1>
      <select
        onChange={(e) =>
          setSearchParams({
            category: e.target.value,
            anotherData: e.target.value + "someValue",
          })
        }
      >
        <option value="all">All</option>
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
      </select>
      <button onClick={() => setSearchParams({})}>remove all filters</button>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchParams;

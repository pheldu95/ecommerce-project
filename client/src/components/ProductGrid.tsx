import { useState } from "react";
import ProductCard from "./ProductCard";


export default function ProductGrid() {

    const [products, setProducts] = useState(() => 
  Array.from({ length: 13 }, (_, index) => ({
    name: `Product ${index}`
  }))
);

  return (
    <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
            <ProductCard product={product}/>
        ))}
    </div>
  )
}
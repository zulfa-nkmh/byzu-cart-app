"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProductCart from "./CardProductCart";
import ProductModal from "./ProductModal";

export default function CartList({ limit = 8 }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, [limit]);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
      {products.map((product) => (
        <CardProductCart
          key={product.id}
          product={product}
          onSelect={() => setSelectedProduct(product)}
        />
      ))}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

CartList.propTypes = {
  limit: PropTypes.number,
};

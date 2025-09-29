import Counter from "./counter";

export default function CardProductCart({ product, onSelect }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col hover:shadow-lg transition">
      {/* Klik bagian atas untuk buka modal */}
      <div onClick={onSelect} className="cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-500 line-clamp-2">{product.description}</p>
        <p className="font-bold mt-2">${product.price}</p>
      </div>

      {/* Qty Control */}
      <Counter product={product} showSubtotal />
    </div>
  );
}

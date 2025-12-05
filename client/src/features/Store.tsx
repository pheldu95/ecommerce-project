import ProductGrid from "../components/ProductGrid";

export default function Store() {
  return (
    <div className="justify-center w-fill flex">
      <div className="w-[30%] bg-red-300">
        sidebar
      </div>
      <div className="w-[60%] bg-green-600">
        <span>Products</span>
        <ProductGrid />
      </div>
    </div>
  )
}
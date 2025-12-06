
type Product = {
  name: string;
};

type Props = {
  product: Product
}
export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-yellow-300 h-full border-red-500 border-1">
      <div className="bg-blue-300 w-[80%] h-[70%] mx-auto mt-4 rounded-md">
        <img src="/src/assets/chair.png" className="h-50" />
      </div>
      <div className="w-[75%] mx-auto mt-2">
        <div className="flex">
          <h2 className="">
            {product.name}
          </h2>
        </div>
        <div className="flex">
          <p>
            $299
          </p>
        </div>
      </div>
    </div>
  )
}
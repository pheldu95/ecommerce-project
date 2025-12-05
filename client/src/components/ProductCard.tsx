
type Product = {
  name: string;
};

type Props = {
    product: Product
}
export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-yellow-300 h-60">
        <div className="bg-blue-300 w-[80%] h-[70%] mx-auto my-4">
            Product Image
        </div>
        {product.name}
    </div>
  )
}
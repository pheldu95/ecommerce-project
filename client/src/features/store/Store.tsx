import ProductGrid from "./ProductGrid";
import StoreSidebar from "./sidebar/StoreSidebar";

export default function Store() {
  return (
    <div className="justify-center w-fill flex">
      <StoreSidebar />
      <div className="w-[80%] bg-green-600">
        <div className='flex justify-between'>
          <div className="mx-2">Items 1-12</div>
          <div className="mx-2">Sort by: Popular</div>
        </div>
        <ProductGrid />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer my-3">
          Load more
        </button>
      </div>
    </div>
  )
}
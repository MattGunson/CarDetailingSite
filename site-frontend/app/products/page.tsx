import ProductCard from "../_components/productCard";

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Box for Customer favorites</div>
      <div className="flex flex-row relative">
        <div className="relative top-6">
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div className="relative top-6">
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

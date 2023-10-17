export default function ProductCard() {
  return (
    <div className="w-[33vh] h-[66vh] bg-slate-300">
      <div>
        <h1 className="bg-slate-400">Card Title</h1>
      </div>
      <div>
        <ul className="list-disc list-inside">
          bottom section contents
          <li>This product does this</li> 
          <li>It also does this</li>
          <li>And it can do this</li>
        </ul>
      </div>
    </div>
  );
}
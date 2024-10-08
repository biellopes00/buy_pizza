export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
            <img src="/pizza.png" alt="pizza" className="max-h-auto max-h-24 block mx-auto" />
        </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-800 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam
        temporibus nisi et nam d olor at enim quam velit! Tenetur est quaerat
        maxime optio maiores dignissimos dolores minima repellat harum.
      </p>
      <button className="bg-bg-light-green mt-4 text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
}

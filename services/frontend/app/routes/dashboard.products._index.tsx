import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import type { Product } from "client";
import { ProductsService } from "client";

export const loader = async () => {
  return json({
    products: await ProductsService.getProducts(),
  });
};

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="items-center justify-between md:flex">
            <h3 className="text-2xl font-semibold text-gray-900">Products</h3>
            <Link
              to="/dashboard/products/create"
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Add product
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ProductsTable products={products} />
        </div>
      </div>
    </main>
  );
}

function ProductsTable({ products }: { products: Product[] }) {
  const navigate = useNavigate();

  return (
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto bg-white">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6 w-[99%]">Name</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {products.map((product) => (
            <tr
              key={product.id}
              onClick={() => {
                navigate(`/dashboard/products/${product.id}`);
              }}
              className="cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

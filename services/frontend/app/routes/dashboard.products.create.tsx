import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import { ProductsService } from "client";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = String(formData.get("name"));

  await ProductsService.createProduct({
    name: name,
  });

  return redirect("/products");
};

export default function CreateProduct() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="items-center justify-between md:flex">
            <h3 className="text-2xl font-semibold text-gray-900">
              Create product
            </h3>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Form method="post">
            <div className="bg-white px-4 py-4 shadow-sm border rounded-lg overflow-hidden mt-12">
              <div className="py-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                disabled={isCreating}
              >
                {isCreating ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}

import { Outlet, useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout/Layout";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  Bars4Icon as MenuAlt2Icon,
  UsersIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/solid";
import { LoaderFunctionArgs } from "react-router";
import { loginRequired } from "~/utils";
import { getSession } from "~/sessions";
import { json, redirect } from "@remix-run/node";
import { UsersService } from "client";
const navigation = [
  { name: "Home", to: "/dashboard", icon: HomeIcon },
  { name: "Products", to: "/dashboard/products", icon: FolderIcon },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }
  return json({
    user: await UsersService.readUsersMe(),
  });
};

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <Layout navigation={navigation} user={user}>
      <Outlet />
    </Layout>
  );
}

import { cssBundleHref } from "@remix-run/css-bundle";
import {
  redirect,
  type LinksFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { OpenAPI } from "client";
import styles from "./tailwind.css";
import Layout from "./components/layout/Layout";
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
import { getSession } from "./sessions";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

if (process.env.NODE_ENV === "development") {
  OpenAPI.BASE = "http://localhost:8000";
} else {
  OpenAPI.BASE =
    "https://auctionbackend.whitesand-161ad3eb.eastus.azurecontainerapps.io/";
}

const navigation = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Products", to: "/products", icon: FolderIcon },
];

export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

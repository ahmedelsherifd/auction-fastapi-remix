import { redirect } from "@remix-run/node";
import { getSession, destroySession, onLogout } from "../sessions";

import { ActionFunctionArgs, Form, Link } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  onLogout();
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

//export const loader = async () => redirect("/");

export default function LogoutRoute() {
  return (
    <>
      <p>Are you sure you want to log out?</p>
      <Form method="post">
        <button>Logout</button>
      </Form>
      <Link to="/">Never mind</Link>
    </>
  );
}

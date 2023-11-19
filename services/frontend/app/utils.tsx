import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getSession } from "./sessions";

export const loginRequired = async ({
  request,
}: {
  request: LoaderFunctionArgs["request"];
}) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }
};

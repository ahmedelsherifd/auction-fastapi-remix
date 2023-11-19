// app/sessions.ts
import {
  ActionFunctionArgs,
  Session,
  createCookieSessionStorage,
} from "@remix-run/node"; // or cloudflare/deno
import { OpenAPI } from "client";

type SessionData = {
  access_token: string;
  token_type: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",

      // all of these are optional
      //domain: "remix.run",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      //httpOnly: true,
      //maxAge: 60,
      //path: "/",
      //sameSite: "lax",
      //secrets: ["s3cret1"],
      //secure: true,
    },
  });

export { getSession, commitSession, destroySession };

// export const onLogin = async (request: ActionFunctionArgs["request"]) => {
//   const session = await getSession(request.headers.get("Cookie"));
//   const token_type = session.get("token_type");
//   const access_token = session.get("access_token");
//   OpenAPI.HEADERS = {
//     Authorization: token_type + " " + access_token,
//   };
// };

export const onLogin = async (
  session: Session<SessionData, SessionFlashData>
) => {
  const token_type = session.get("token_type");
  const access_token = session.get("access_token");
  OpenAPI.HEADERS = {
    Authorization: token_type + " " + access_token,
  };
};

export const onLogout = () => {
  OpenAPI.HEADERS = {};
};

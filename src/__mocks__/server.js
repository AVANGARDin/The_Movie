import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {


    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", null),
];

export const server = setupServer(...handlers);
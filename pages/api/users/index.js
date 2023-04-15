// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "../../../database/connectMongo";
import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection!" })
  );

  // type of request
  const { method } = req;
  switch (method) {
    case "GET":
      await getUsers(req, res);
      break;
    case "POST":
      await postUser(req, res);
      break;
    case "PUT":
      await putUser(req, res);
      break;
    case "DELETE":
      await deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed!`);
      break;
  }
}

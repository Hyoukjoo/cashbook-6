import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV !== "production") {
  const envFound = dotenv.config();
  if (envFound.error) throw new Error("Couldn't find .env file");
}

export default {
  port: parseInt(process.env.PORT) || 3000,
  end_point: "http://localhost:3000/",
  github_client_id: process.env.GITHUB_CLIENT_ID,
  github_client_secret: process.env.GITHUB_CLIENT_SECRET,
};

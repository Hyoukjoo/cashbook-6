const env = {
  isDev: process.env.NODE_ENV === "development",
  server: {
    PORT: process.env.PORT,
  },
  api: {
    URL: process.env.API_URL,
  },
};

export default env;

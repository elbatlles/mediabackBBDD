module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-52-7-228-45.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dcgkvf1qfmm0ju"),
        username: env("DATABASE_USERNAME", "gahbjdbbstwtfr"),
        password: env(
          "DATABASE_PASSWORD",
          "1a8393cad953128940ce1ee335fd1a8b69d0745046c5cb4a53f3257a915bc5d9"
        ),
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});

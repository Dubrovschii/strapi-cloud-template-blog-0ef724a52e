// import path from "path";

// export default ({ env }) => {
//   const client = env("DATABASE_CLIENT", "sqlite");

//   const connections = {
//     mysql: {
//       connection: {
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 3306),
//         database: env("DATABASE_NAME", "strapi"),
//         user: env("DATABASE_USERNAME", "strapi"),
//         password: env("DATABASE_PASSWORD", "strapi"),
//         charset: "utf8", // <-- Добавь ЭТО
//         ssl: env.bool("DATABASE_SSL", false) && {
//           key: env("DATABASE_SSL_KEY", undefined),
//           cert: env("DATABASE_SSL_CERT", undefined),
//           ca: env("DATABASE_SSL_CA", undefined),
//           capath: env("DATABASE_SSL_CAPATH", undefined),
//           cipher: env("DATABASE_SSL_CIPHER", undefined),
//           rejectUnauthorized: env.bool(
//             "DATABASE_SSL_REJECT_UNAUTHORIZED",
//             true
//           ),
//         },
//       },
//       pool: { min: 2, max: 10 },
//     },

//     postgres: {
//       connection: {
//         connectionString: env("DATABASE_URL"),
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "strapi"),
//         user: env("DATABASE_USERNAME", "strapi"),
//         password: env("DATABASE_PASSWORD", "strapi"),
//         ssl: env.bool("DATABASE_SSL", false) && {
//           key: env("DATABASE_SSL_KEY", undefined),
//           cert: env("DATABASE_SSL_CERT", undefined),
//           ca: env("DATABASE_SSL_CA", undefined),
//           capath: env("DATABASE_SSL_CAPATH", undefined),
//           cipher: env("DATABASE_SSL_CIPHER", undefined),
//           rejectUnauthorized: env.bool(
//             "DATABASE_SSL_REJECT_UNAUTHORIZED",
//             true
//           ),
//         },
//         schema: env("DATABASE_SCHEMA", "public"),
//       },
//       pool: {
//         min: env.int("DATABASE_POOL_MIN", 2),
//         max: env.int("DATABASE_POOL_MAX", 10),
//       },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           "..",
//           "..",
//           env("DATABASE_FILENAME", ".tmp/data.db")
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
//     },
//   };
// };
import path from "path";

type EnvFunction = {
  (key: string, defaultValue?: any): any;
  int: (key: string, defaultValue?: number) => number;
  bool: (key: string, defaultValue?: boolean) => boolean;
};

type ClientType = "mysql" | "postgres" | "sqlite";

export default ({ env }: { env: EnvFunction }) => {
  const client = env("DATABASE_CLIENT", "sqlite") as ClientType;

  const connections: Record<ClientType, any> = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        charset: "utf8",
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: { min: 2, max: 10 },
    },

    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },

    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};

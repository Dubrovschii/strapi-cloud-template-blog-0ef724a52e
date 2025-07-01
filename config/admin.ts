// export default ({ env }) => ({
//   auth: {
//     secret: env("ADMIN_JWT_SECRET"),
//   },
//   apiToken: {
//     salt: env("API_TOKEN_SALT"),
//   },
//   transfer: {
//     token: {
//       salt: env("TRANSFER_TOKEN_SALT"),
//     },
//   },
//   secrets: {
//     encryptionKey: env("ENCRYPTION_KEY"),
//   },
//   flags: {
//     nps: env.bool("FLAG_NPS", true),
//     promoteEE: env.bool("FLAG_PROMOTE_EE", true),
//   },
//   locale: "ru",
// });
export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },
});
// type Env = {
//   (key: string, defaultValue?: string | boolean): any;
//   bool: (key: string, defaultValue?: boolean) => boolean;
// };

// export default ({ env }: { env: Env }) => ({
//   auth: {
//     secret: env("ADMIN_JWT_SECRET"),
//   },
//   apiToken: {
//     salt: env("API_TOKEN_SALT"),
//   },
//   transfer: {
//     token: {
//       salt: env("TRANSFER_TOKEN_SALT"),
//     },
//   },
//   secrets: {
//     encryptionKey: env("ENCRYPTION_KEY"),
//   },
//   flags: {
//     nps: env.bool("FLAG_NPS", true),
//     promoteEE: env.bool("FLAG_PROMOTE_EE", true),
//   },
//   i18n: {
//     defaultLocale: "ru",
//     locales: ["en", "ru"],
//   },
// });

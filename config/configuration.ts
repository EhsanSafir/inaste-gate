import * as path from "path";

export interface DatabaseConfig {
  type: string,
  host: string,
  port: number,
  username: string
  password: string,
  database: string,
  synchronize: boolean,
  entities: string[],
}

export default () => (
  {
    secret_key: process.env.SECRET_KEY,
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: Boolean(JSON.parse(process.env.DATABASE_SYNC)),
      entities: [path.basename(path.dirname(__dirname)) + "/src/**/*.js"]
    },
    mailer: {
      host: process.env.MAILE_HOST,
      port: process.env.MAILE_PORT,
      secure: Boolean(JSON.parse(process.env.MAILE_SECURE)),
      auth: {
        user: process.env.MAILE_USER,
        pass: process.env.MAILE_PASS
      }
    },
    jwt: {
      confirm_mail_expiresIn: process.env.JWT_CONFIRM_MAILE_EXPIRES_IN,
      access_token_expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
      refresh_token_expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    }
  });


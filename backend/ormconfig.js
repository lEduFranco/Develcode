const isLocal = process.env.APP_ENV === 'local';

const params = {
  type: process.env.DATABASE_CONNECTION,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  port: process.env.DATABASE_PORT,
  entities: [`${process.env.DATABASE_ENTITIES}`],
  migrations: [`${process.env.DATABASE_MIGRATIONS}`],
  cli: {
    migrationsDir: `${process.env.DATABASE_MIGRATIONS_DIR}`,
  },
};

if (!isLocal) {
  Object.assign(params, {
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
}

module.exports = params;

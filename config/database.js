module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfftdohgp3jjsea5sur0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ivantique'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'FPhGSlgfDaAWtuKQmGZrH5jusGU0Kb10'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

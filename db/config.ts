import { defineTable, column, defineDb } from 'astro:db';

// https://astro.build/db/config

const Views = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number({
      default: 1,
    }),
  },
});

export const config = {
  client: {
    url: import.meta.env.ASTRO_DB_REMOTE_URL,
    authToken: import.meta.env.ASTRO_DB_APP_TOKEN,
  },
};


export default defineDb({
  tables: { Views },
});
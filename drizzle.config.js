
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:MhQJimg8Ct0p@ep-silent-tree-a5awz02p.us-east-2.aws.neon.tech/promptly?sslmode=require',
    }
  };
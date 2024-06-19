// config file foe wrappping all env at one place so we can access it anytiime fully or at particular basis as it is now stored as key value pair

const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_COLLECTION_ID),
  appwriteBucketID: String(import.meta.env.VITE_BUCKET_ID),
};

export default config;

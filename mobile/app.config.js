import "dotenv/config";

export default {
  expo: {
    name: "YourApp",
    slug: "your-app",
    extra: {
      clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
};

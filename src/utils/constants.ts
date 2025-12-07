// Common CSS classes
export const COMMON_CLASSES = {
  link: "decoration-transparent hover:underline",
  button: "flex justify-center items-center gap-1 p-2 border-[1px] border-dark hover:border-accent dark:border-light rounded-lg min-w-24 h-10 font-body text-dark hover:text-accent dark:text-light text-sm cursor-pointer list-none",
  socialButton: "flex justify-center items-center gap-1 p-2 border-[1px] border-dark hover:border-accent dark:border-light rounded-lg min-w-24 h-10 font-assistant text-dark hover:text-accent dark:text-light text-sm cursor-pointer list-none",
  card: "shadow-sm my-4 p-4 border border-gray-300 hover:border-accent rounded-lg font-assistant cursor-pointer list-none",
  header: "pb-3 font-semibold text-dark dark:text-light text-3xl",
} as const;

// Navigation
export const NAVIGATION = {
  skipToContent: "skip-to-content",
} as const;

// Analytics
export const ANALYTICS = {
  gaTrackingId: import.meta.env.PUBLIC_GA_TRACKING_ID || "",
} as const;

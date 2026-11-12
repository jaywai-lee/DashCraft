import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env.e2e") });

export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: STORAGE_STATE,
      },
      testIgnore: /.*\.setup\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: STORAGE_STATE,
      },
      testIgnore: /.*\.setup\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: STORAGE_STATE,
      },
      testIgnore: /.*\.setup\.ts/,
      dependencies: ["setup"],
    },
  ],
  webServer: {
    command: "npm run dev",
    url: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    ...(process.env.E2E_SUPABASE_URL && {
      env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.E2E_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.E2E_SUPABASE_ANON_KEY || "",
      },
    }),
  },
});

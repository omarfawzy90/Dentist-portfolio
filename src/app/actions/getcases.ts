import { getCaseStudies } from "@/app/actions/getAllCases";

export async function getSafeCaseStudies() {
  try {
    if (!process.env.DATABASE_URL) {
      console.warn("No DATABASE_URL found, returning empty array");
      return [];
    }

    if (process.env.CI === "true" && !process.env.VERCEL_ENV) {
      console.warn(
        "Detected CI environment without VERCEL_ENV, skipping database call"
      );
      return [];
    }

    const studies = await getCaseStudies();
    return studies || [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

export const caseStudies = [];

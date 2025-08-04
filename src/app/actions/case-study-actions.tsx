"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/Lib/prisma";

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface FormActionResult {
  success: boolean;
  message: string;
  caseStudy?: CaseStudy;
}

export default async function addCaseStudy(
  _prevState: any,
  formData: FormData
): Promise<FormActionResult> {
  try {
    const title = formData.get("title")?.toString().trim() || "";
    const description = formData.get("description")?.toString().trim() || "";
    const imageUrl = formData.get("image")?.toString().trim() || "";

    if (!title || !description) {
      return {
        success: false,
        message: "Title and description are required.",
      };
    }

    if (title.length < 3) {
      return {
        success: false,
        message: "Title must be at least 3 characters long.",
      };
    }

    if (description.length < 10) {
      return {
        success: false,
        message: "Description must be at least 10 characters long.",
      };
    }

    const newCaseStudy = await prisma.caseStudy.create({
      data: {
        title,
        description,
        imageUrl,
      },
    });

    revalidatePath("/case-studies");

    return {
      success: true,
      message: "Case study added successfully!",
      caseStudy: newCaseStudy,
    };
  } catch (error) {
    console.error("Failed to add case study:", error);
    return {
      success: false,
      message: "Failed to save case study to the database.",
    };
  }
}

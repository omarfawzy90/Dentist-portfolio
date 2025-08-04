"use server";

import { prisma } from "@/Lib/prisma";

export async function deleteCase(id: number) {
  try {
    await prisma.caseStudy.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting case:", error);
    return { success: false, error: "Failed to delete case" };
  }
}

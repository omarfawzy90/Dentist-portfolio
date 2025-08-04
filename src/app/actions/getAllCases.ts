"use server";
import { prisma } from "@/Lib/prisma";

export async function getCaseStudies() {
  return await prisma.caseStudy.findMany({
    orderBy: { createdAt: "desc" },
  });
}

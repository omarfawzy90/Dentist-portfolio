"use server";

import { prisma } from "@/Lib/prisma";

export async function updateCase({
  id,
  title,
  description,
  imageUrl,
}: {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}) {
  try {
    await prisma.caseStudy.update({
      where: { id },
      data: { title, description, imageUrl },
    });
    return { success: true };
  } catch (error) {
    console.error("Update failed:", error);
    return { success: false };
  }
}

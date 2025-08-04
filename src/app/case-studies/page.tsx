"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteCase } from "@/app/actions/deleteCase";
import Addbutton from "@/components/Addbutton";
import { getCaseStudies } from "@/app/actions/getAllCases";
import { useEffect, useState } from "react";
import { updateCase } from "../actions/UpdateCase";
import Image from "next/image";

type Case = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export default function CaseStudiesSection() {
  const [caseStudies, setCaseStudies] = useState<Case[]>([]);
  const [isPending, startTransition] = useTransition();
  const [editingCase, setEditingCase] = useState<Case | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchCases = async () => {
      const data = await getCaseStudies();
      setCaseStudies(data);
    };
    fetchCases();
  }, []);

  useEffect(() => {
    if (editingCase) {
      setFormData({
        title: editingCase.title,
        description: editingCase.description,
        imageUrl: editingCase.imageUrl || "",
      });
    }
  }, [editingCase]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this case?")) {
      startTransition(async () => {
        await deleteCase(id);
        router.refresh();
      });
    }
  };

  return (
    <section className="mt-2 mb-8 pb-5 lg:mt-24 bg-white-50">
      <Addbutton />
      <div className="max-w-auto mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center text-4xl mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 font-light mx-auto my-5 leading-relaxed">
            Real patient transformations showcasing the power of modern
            dentistry and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.length > 0 ? (
            caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.imageUrl || "/placeholder.jpg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-light line-clamp-3 leading-relaxed">
                    {study.description}
                  </p>

                  <button
                    onClick={() => setEditingCase(study)}
                    className="text-sm text-blue-500 hover:underline hover:cursor-pointer mr-4 "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(study.id)}
                    className="text-sm text-red-500 hover:underline disabled:opacity-50 hover:cursor-pointer"
                    disabled={isPending}
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-500 text-lg">
              No case studies found.
            </div>
          )}
        </div>
      </div>

      {editingCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl space-y-4">
            <h2 className="text-xl font-semibold text-slate-700">Edit Case</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full border p-2 rounded"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              className="w-full border p-2 rounded"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              className="w-full border p-2 rounded"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditingCase(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={async () => {
                  await updateCase({
                    id: editingCase.id,
                    title: formData.title,
                    description: formData.description,
                    imageUrl: formData.imageUrl,
                  });
                  setEditingCase(null);
                  router.refresh();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

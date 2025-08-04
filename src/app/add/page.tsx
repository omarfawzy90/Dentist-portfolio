"use client";
import { useState } from "react";
import { useActionState } from "react";
import addCaseStudy from "../actions/case-study-actions";
import ImageUpload from "@/components/ImageUpload";

export default function AddCaseStudyPage() {
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadComplete = (url: string) => {
    setImageUrl(url);
  };

  const resetForm = () => {
    setImageUrl("");
    const form = document.getElementById("case-study-form") as HTMLFormElement;
    form?.reset();
  };

  const [state, formAction, isPending] = useActionState(addCaseStudy, null);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-4xl font-light text-slate-800 mb-2">
            Add New Case Study
          </h1>
          <p className="text-lg text-slate-600 font-light">
            Share your latest patient transformation
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form id="case-study-form" action={formAction} className="space-y-6">
            <input type="hidden" name="image" value={imageUrl} />

            <ImageUpload onUploadComplete={handleUploadComplete} />

            <InputField
              id="title"
              name="title"
              label="Case Study Title *"
              placeholder="e.g., Complete Smile Makeover"
              required
            />

            <TextAreaField
              id="description"
              name="description"
              label="Description *"
              placeholder="Describe the treatment process, results, and patient experience..."
              required
            />

            {state && <Alert success={state.success} message={state.message} />}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isPending || !imageUrl}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                {isPending ? (
                  <>
                    <LoadingSpinner />
                    Adding Case Study...
                  </>
                ) : (
                  "Add Case Study"
                )}
              </button>

              {state?.success && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200"
                >
                  Add Another
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({
  id,
  name,
  label,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      />
    </div>
  );
}

function TextAreaField({
  id,
  name,
  label,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
      />
    </div>
  );
}

function Alert({ success, message }: { success: boolean; message: string }) {
  return (
    <div
      className={`p-4 rounded-lg ${
        success
          ? "bg-green-50 border border-green-200"
          : "bg-red-50 border border-red-200"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`flex-shrink-0 ${
            success ? "text-green-400" : "text-red-400"
          }`}
        >
          {success ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        <div className="ml-3">
          <p
            className={`text-sm ${success ? "text-green-700" : "text-red-700"}`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

function SuccessIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

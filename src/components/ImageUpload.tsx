"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

export default function ImageUpload({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-slate-700 mb-3">
        Case Study Image
      </label>

      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors">
        {uploadedImageUrl ? (
          <div className="space-y-4">
            <img
              src={uploadedImageUrl || "/placeholder.svg"}
              alt="Uploaded image"
              className="max-h-48 mx-auto rounded-lg object-cover"
            />
            <p className="text-sm text-slate-500">
              Upload complete! Click below to change image
            </p>
          </div>
        ) : (
          <ImagePlaceholder />
        )}

        <div className="mt-4">
          <UploadButton
            endpoint="caseImageUploader"
            onClientUploadComplete={(res: any) => {
              setIsUploading(false);
              const url = res?.[0]?.url;
              if (url) {
                setUploadedImageUrl(url);
                onUploadComplete(url);
              }
            }}
            onUploadBegin={() => setIsUploading(true)}
            onUploadError={(err: any) => {
              console.error("Upload error:", err);
              setIsUploading(false);
              alert("Upload failed. Please try again.");
            }}
            appearance={{
              button:
                "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors",
              allowedContent: "text-xs text-slate-500 mt-2",
            }}
          />
        </div>

        {isUploading && (
          <div className="mt-4 flex items-center justify-center">
            <LoadingSpinner />
            <span className="ml-2 text-sm text-slate-600">Uploading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="space-y-2">
      <div className="text-slate-400">
        <svg
          className="mx-auto h-12 w-12"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-slate-600">Upload your case study image</p>
      <p className="text-xs text-slate-500">PNG, JPG, JPEG up to 10MB</p>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-blue-600"
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

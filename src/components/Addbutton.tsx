import Link from "next/link";

export default function Addbutton() {
  return (
    <div className="flex justify-end mx-25">
      <Link href={"/add"}>
        <button className="bg-blue-600 hover:bg-blue-800 text-white hover:cursor-pointer font-medium py-3 px-3 rounded-full">
          Add New Case
        </button>
      </Link>
    </div>
  );
}

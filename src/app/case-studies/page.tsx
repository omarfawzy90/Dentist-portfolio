export const dynamic = "force-dynamic";
import Addbutton from "@/components/Addbutton";
import { getCaseStudies } from "@/app/actions/getAllCases";

export default async function CaseStudiesSection() {
  const caseStudies = await getCaseStudies();

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
            caseStudies.map(
              (study: {
                id: number;
                title: string;
                description: string;
                imageUrl: string;
              }) => (
                <div
                  key={study.id}
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
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
                  </div>
                </div>
              )
            )
          ) : (
            <div className="col-span-full text-center text-slate-500 text-lg">
              No case studies found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

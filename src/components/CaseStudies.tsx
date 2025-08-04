import { caseStudies } from "@/app/actions/getcases";

export default async function CaseStudiesSection() {
  return (
    <section className="mt-2 mb-8 pb-5 lg:mt-24 bg-white-50">
      <div className="max-w-auto mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center text-4xl mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 font-light  mx-auto my-5 leading-relaxed">
            Real patient transformations showcasing the power of modern
            dentistry and personalized care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study: any) => (
            <div
              key={study.id}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.imageUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
}

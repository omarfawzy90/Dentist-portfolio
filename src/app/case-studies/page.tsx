import Header from "@/components/Header";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    description:
      "Porcelain veneers transformation achieving natural-looking, perfectly aligned teeth.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Dental Implant Success",
    description:
      "Single tooth replacement with seamless integration and natural appearance.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Orthodontic Excellence",
    description:
      "Clear aligner therapy resulting in perfect bite alignment and enhanced confidence.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Cosmetic Whitening",
    description:
      "Professional whitening treatment delivering dramatic shade improvement safely.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Restorative Care",
    description:
      "Complex crown and bridge work restoring full function and beautiful aesthetics.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Gum Disease Treatment",
    description:
      "Periodontal therapy achieving healthy gums and improved overall oral health.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function CaseStudiesSection() {
  return (
    <>
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
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
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
    </>
  );
}

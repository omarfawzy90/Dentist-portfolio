import { Heart, Smile, Shield, Sparkles, Zap, Users } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    id: 1,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions that look and feel like natural teeth.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Wisdom Tooth Removal",
    description:
      "Safe and comfortable extraction procedures with minimal recovery time.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Smile Makeovers",
    description:
      "Complete cosmetic transformations using veneers, whitening, and reshaping.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Root Canal Therapy",
    description:
      "Advanced endodontic treatment to save damaged teeth and eliminate pain.",
    icon: Heart,
  },
  {
    id: 5,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter, more confident smile.",
    icon: Smile,
  },
  {
    id: 6,
    title: "Family Dentistry",
    description:
      "Comprehensive dental care for patients of all ages in a comfortable setting.",
    icon: Users,
  },
];

export default function ServicesSection() {
  return (
    <section className="mt-10 lg:py-2 bg-white">
      <div className="max-w-9xl mx-auto">
        <div className="text-4xl text-center justify-center mb-5">
          <h2 className="font-light text-slate-800">Services Offered</h2>

          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive dental care tailored to your unique needs, delivered
            with precision and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group  bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

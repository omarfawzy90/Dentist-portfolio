interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
}

let caseStudies: CaseStudy[] = [
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

export default caseStudies;

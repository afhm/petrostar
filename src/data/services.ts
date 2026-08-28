export interface Service {
  slug: string;
  number: string;
  image: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'engineering-instrumentation',
    number: '01',
    image: '/src/images/services/s1.png',
    icon: '/src/images/icon-1.svg',
    title: 'Engineering & Instrumentation',
    description:
      'Providing cutting-edge engineering solutions and precision instrumentation for industrial automation, process control, and measurement systems.',
  },
  {
    slug: 'specialty-materials-alloys',
    number: '02',
    image: '/src/images/services/s2.png',
    icon: '/src/images/icon-2.svg',
    title: 'Specialty Materials & Alloys',
    description:
      'Supplying high-performance materials and custom alloys engineered for extreme conditions, ensuring durability and reliability in demanding applications.',
  },
  {
    slug: 'oilfield-equipment-supplies',
    number: '03',
    image: '/src/images/services/s3.png',
    icon: '/src/images/icon-3.svg',
    title: 'Oilfield Equipment & Supplies',
    description:
      'Delivering comprehensive oilfield solutions including drilling equipment, wellhead components, and maintenance supplies for optimal field operations.',
  },
  {
    slug: 'downhole-solutions',
    number: '04',
    image: '/src/images/services/s4.png',
    icon: '/src/images/icon-4.svg',
    title: 'Downhole Solutions',
    description:
      'Offering advanced downhole tools and technologies designed to enhance well performance, improve recovery rates, and ensure operational efficiency.',
  },
];

/** Canonical in-site URL for a single service. */
export const serviceUrl = (slug: string): string => `/services#${slug}`;

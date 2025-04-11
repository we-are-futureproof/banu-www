import type { Metadata } from "next";
import type { ReactNode } from "react";

// Book page metadata and structured data
export const generateMetadata = async (): Promise<Metadata> => {
  // Create structured data for booking page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Therapy Session Booking",
    "description": "Schedule your therapy session with Banu Dalamanli.",
    "provider": {
      "@type": "Person",
      "name": "Banu Dalamanli",
      "jobTitle": "Psychologist"
    },
    "serviceType": "Mental Health Service",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "availabilityStarts": new Date().toISOString().split('T')[0]
    }
  };

  return {
    title: "Book a Session | Banu Dalamanli, Psychologist",
    description: "Schedule your therapy session with Banu Dalamanli. Choose from individual therapy, integration therapy, or online consultations.",
    openGraph: {
      title: "Book a Session | Banu Dalamanli, Psychologist",
      description: "Schedule your therapy session with Banu Dalamanli. Choose from individual therapy, integration therapy, or online consultations.",
      url: "/book",
      type: "website"
    },
    alternates: {
      canonical: "https://banudalamanli.com/book"
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  };
};

export default function BookingLayout({ children }: { children: ReactNode }) {
  return children;
}

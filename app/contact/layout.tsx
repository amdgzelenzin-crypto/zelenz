import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | NIXTUDIO by Nikita Liby, Pala",
  description:
    "Enquire about bridal, party makeup, or salon services at NIXTUDIO in Pala. WhatsApp or fill in our booking form.",
  openGraph: {
    title: "Book an Appointment | NIXTUDIO by Nikita Liby, Pala",
    description:
      "Enquire about bridal, party makeup, or salon services at NIXTUDIO in Pala. WhatsApp or fill in our booking form.",
    url: "https://nixtudio.com/contact",
    images: [{ url: "/og/contact-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Book an Appointment | NIXTUDIO by Nikita Liby, Pala",
    description:
      "Enquire about bridal, party makeup, or salon services at NIXTUDIO in Pala. WhatsApp or fill in our booking form.",
    images: ["/og/contact-og.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

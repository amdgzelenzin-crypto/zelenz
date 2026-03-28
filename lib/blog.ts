export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hd-vs-airbrush-makeup-pala-guide",
    title: "Pala Bridal Guide: HD vs Airbrush Makeup for Kerala Weddings",
    excerpt: "Choosing between HD and Airbrush makeup is a critical decision for Kerala brides. Learn which one withstands the humidity of Pala while looking flawless in photos.",
    date: "March 25, 2025",
    author: "Nikita Liby",
    category: "Bridal Tips",
    image: "/images/nixtudio-luxury-salon-interior-pala.webp",
    content: `
      <h2>Introduction to Bridal Makeup Technologies</h2>
      <p>For a bride in Pala, the wedding day is often a marathon starting from the early morning Muhurtham or Church service to the late-evening reception. Choosing between HD and Airbrush makeup is a critical decision that depends on your skin type and the specific venue lighting.</p>
      
      <h3>What is HD Bridal Makeup?</h3>
      <p>HD (High-Definition) makeup uses specialized products that are ultra-fine and designed to be invisible to modern 4K cameras. At NIXTUDIO, our HD makeup focuses on creating a 'second skin' finish that looks natural to the naked eye while concealing every imperfection.</p>
      
      <h3>The Airbrush Advantage in Kerala</h3>
      <p>Airbrush makeup is applied as a fine mist using an air compressor. This technology is particularly effective for brides in Kerala because it is sweat-proof and extremely long-lasting. If you are having an outdoor wedding in Kottayam or a daytime event in Pala, Airbrush is often the superior choice for humidity resistance.</p>
      
      <h3>Which one should you choose?</h3>
      <p>If you have oily skin or are prone to sweating, Airbrush is your best friend. For brides with dry to normal skin who want a more luminous, 'glowy' finish, HD makeup offers more flexibility in layering and pigment matching with traditional temple gold jewelry.</p>
    `
  },
  {
    slug: "christian-bridal-trends-2025-kerala",
    title: "Christian Bridal Makeup Looks for 2025: From Pala to Changanacherry",
    excerpt: "Explore the latest trends in Christian bridal aesthetics for 2025. From the 'Glow-from-within' look to sophisticated eye definitions perfect for church ceremonies.",
    date: "March 20, 2025",
    author: "Nikita Liby",
    category: "Trends",
    image: "/images/hd-christian-bridal-makeup-look-pala.webp",
    content: `
      <h2>The 2025 Christian Bride</h2>
      <p>The modern Christian bride in Kerala is moving away from heavy, cakey foundation towards a more ethereal, luminous aesthetic. In our Pala studio, we've seen a surge in requests for 'Monochromatic Rose' and 'Glass Skin' finishes that complement the ornate white sarees and gowns common in Changanacherry and Kottayam weddings.</p>
      
      <h3>Key Trend: Subtle Eye Definitions</h3>
      <p>Rather than heavy smokey eyes, 2025 is all about 'Lash-Focused' eyes. We use high-quality individual lashes and soft champagne pigments to ensure the eyes pop during the emotional church ceremony without looking overly dramatic.</p>
      
      <h3>Pigment Sync with White & Ivory</h3>
      <p>One of the most technical aspects of bridal makeup is ensuring the foundation undertone doesn't clash with the stark white of a bridal gown. We use specialized color-correcting primers to maintain a neutral-warm balance that looks regal under cathedral lighting.</p>
    `
  },
  {
    slug: "pre-wedding-skin-prep-kerala-weather",
    title: "Essential Pre-Wedding Skin Prep for Humid Kerala Weather",
    excerpt: "Preparing your skin for a wedding in Pala requires a technical approach to hydration. Discover our recommended 30-day pre-bridal skincare protocol.",
    date: "March 15, 2025",
    author: "Nikita Liby",
    category: "Skin Prep",
    image: "/images/nixtudio-bridal-makeup-appointment-booking.webp",
    content: `
      <h2>The Logic of the Look Starts with the Skin</h2>
      <p>No matter how premium the foundation, the final result depends on the canvas. For brides in the Pala and Kottayam region, the high humidity can make skin behave unpredictably. At NIXTUDIO, we recommend starting a technical skincare protocol exactly 30 days before your big day.</p>
      
      <h3>Hydration vs. Moisture</h3>
      <p>In Kerala's climate, many brides confuse oiliness with hydration. Most skin types here are actually dehydrated at a cellular level despite surface oil. We recommend water-based hyaluronic serums to 'plump' the skin architecture without adding heavy oils that might make makeup slide later in the day.</p>
      
      <h3>The No-Exfoliation Zone</h3>
      <p>Stop all chemical and physical exfoliants at least 7 days before the wedding. We want the skin's natural barrier to be completely intact, ensuring the makeup sits flush against the skin rather than clinging to dry patches.</p>
    `
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find(p => p.slug === slug);
}

import { NextResponse } from "next/server";

const INDEX_NOW_KEY = "a8f3b2e1c9d4f7a6b5e2d1c8f3a9b7e4";
const HOST = "nixtudio.in";

const urls = [
  `https://${HOST}`,
  `https://${HOST}/bridal`,
  `https://${HOST}/party`,
  `https://${HOST}/services`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/gallery`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/hd-vs-airbrush-makeup-kerala-weddings`,
  `https://${HOST}/blog/christian-bridal-makeup-trends-2025`,
  `https://${HOST}/blog/pre-wedding-skin-prep-humid-kerala`,
  `https://${HOST}/blog/best-salon-pala-2026-guide`,
  `https://${HOST}/blog/gel-nails-hydrafacial-pala-guide`,
  `https://${HOST}/blog/keratin-treatment-pala-humidity-guide`,
  `https://${HOST}/blog/hydrafacial-pala-what-to-expect`,
  `https://${HOST}/blog/salon-near-kottayam-pala-guide`,
  `https://${HOST}/best-salon-pala`,
  `https://${HOST}/best-salon-kottayam`,
  `https://${HOST}/best-bridal-makeup-kottayam`,
  `https://${HOST}/bridal-makeup-kottayam`,
  `https://${HOST}/hair-salon-kottayam`,
  `https://${HOST}/hair-salon-pala`,
  `https://${HOST}/nail-salon-pala`,
  `https://${HOST}/facial-spa-pala`,
  `https://${HOST}/beauty-parlour-pala`,
  `https://${HOST}/hydrafacial-pala`,
  `https://${HOST}/keratin-treatment-pala`,
  `https://${HOST}/waxing-threading-pala`,
  `https://${HOST}/press`,
  `https://${HOST}/best-bridal-makeup-pala`,
  `https://${HOST}/bridal-makeup-pala`,
  `https://${HOST}/best-bridal-makeup-kottayam`,
];

export async function POST() {
  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: INDEX_NOW_KEY,
        keyLocation: `https://${HOST}/${INDEX_NOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, status: response.status });
    }

    return NextResponse.json(
      { success: false, status: response.status },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

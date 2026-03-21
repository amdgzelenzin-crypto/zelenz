import { NextResponse } from "next/server";

const INDEX_NOW_KEY = "a8f3b2e1c9d4f7a6b5e2d1c8f3a9b7e4";
const HOST = "nixtudio.com";

const urls = [
  `https://${HOST}`,
  `https://${HOST}/bridal`,
  `https://${HOST}/party`,
  `https://${HOST}/services`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
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

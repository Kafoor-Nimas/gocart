import { NextResponse } from "next/server";

// Get Dashboard data for Seller (total orders, total earnings, total products)
export async function GET(requset) {
  try {
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 },
    );
  }
}

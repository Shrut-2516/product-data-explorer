import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;   // ✅ must await params

  const product = products.find(p => p.id === id);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

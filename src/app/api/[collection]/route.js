import { NextResponse } from "next/server"

import clientPromise from "/src/lib/mongodb"

export async function GET(req, { params }) {

  const client = await clientPromise
  const db = client.db("chris")
  const collectionName = params.collection.replace(/-/g, "_")
  const rows = await db.collection(collectionName).find({}).toArray()

  return NextResponse.json(rows)
}

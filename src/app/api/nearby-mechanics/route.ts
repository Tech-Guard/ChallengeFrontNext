import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const apiKey = "AIzaSyBd2k4ZkH-eFCNSRhmhd9HJ0xym8abqEyk";
  const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=car_repair&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar mecânicas" }, { status: 500 });
  }
}
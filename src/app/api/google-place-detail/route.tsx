import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    
    try {
    const {placeName} = await req.json();

     if (!placeName || typeof placeName !== "string") {
      return NextResponse.json(
        {
          status: "error",
          message: "A valid placeName is required",
        },
        { status: 400 }
      );
    }
    const apiKey = process.env.GOOGLE_PLACE_API_KEY;

    if (!apiKey) {
      console.error("GOOGLE_PLACE_API_KEY is missing");
      return NextResponse.json(
        {
          status: "error",
          message: "API key is missing",
        },
        { status: 500 }
      );
    }

    const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
        ["places.photos,places.displayName,places.id"],
      },
    };
    const result = await axios.post(BASE_URL,{textQuery:placeName,},config);
    console.log("Google response:", JSON.stringify(result.data, null, 2));
    const place = result.data?.places?.[0];

      if (!place) {
        return NextResponse.json(
          {
            status: "error",
            message:  `No place found for: ${placeName}`,
          },
          { status: 404 }
        );
      }

      // const photoRefName = result?.data?.places[0]?.photos[0]?.name;
      // const photoRefName = result?.data?.places?.[0]?.photos?.[0]?.name;
      const photoRefName = place?.photos?.[0]?.name;

      console.log("Place ID:", place.id);
      console.log("Place name:", place.displayName?.text);
      console.log("Photo ref name:", photoRefName);

      if (!photoRefName) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "Place found, but Google Places returned no photos.",
          placeId: place.id,
          placeName: place.displayName?.text,
        },
        { status: 404 }
      );
    }
        

    const photoRefUrl = `https://places.googleapis.com/v1/${photoRefName}/media?maxHeightPx=1000&maxWidthPx=1000&key=${apiKey}`
      
    return NextResponse.json({
      status: "success",
      data: photoRefUrl,
      placeId: place.id,
      placeName: place.displayName?.text,
    });

    } catch (error) {
         if (axios.isAxiosError(error)) {
      console.error(
        "Google Places API error:",
        error.response?.status,
        error.response?.data ?? error.message
      );

      return NextResponse.json(
        {
          status: "error",
          message: "Google Places API request failed",
          details: error.response?.data ?? error.message,
        },
        { status: error.response?.status ?? 500 }
      );
    }

    console.error("Unexpected error:", error);

    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    
    try {
    const {placeName} = await req.json();

     if (!placeName) {
      return NextResponse.json(
        {
          status: "error",
          message: "placeName is required",
        },
        { status: 400 }
      );
    }

    const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_PLACE_API_KEY,
        "X-Goog-FieldMask":
        ["places.photos,places.displayName,places.id"],
      },
    };
    const result = await axios.post(BASE_URL,{textQuery:placeName},config);
    console.log("Google response:", JSON.stringify(result.data, null, 2));
    const place = result?.data?.places?.[0];

      if (!place) {
        return NextResponse.json(
          {
            status: "error",
            message: "No place found",
          },
          { status: 404 }
        );
      }

      const placeRefName = place?.photos?.[0]?.name;

      console.log("Place ref name:", placeRefName);

      if (!placeRefName) {
        return NextResponse.json(
          {
            status: "error",
            message: "Place found, but no photo is available",
          },
          { status: 404 }
        );
      }

        
    // // const placeRefName = result?.data?.places[0]?.photos[0]?.name;
    // const placeRefName = result?.data?.places?.[0]?.photos?.[0]?.name;
    // console.log("Place ref name",placeRefName)

    const photoRefUrl = `https://places.googleapis.com/v1/${placeRefName}/media?maxHeightPx=1000&maxWidthPx=1000&key=${process?.env.GOOGLE_PLACE_API_KEY}`
        return NextResponse.json({status:"success", data:photoRefUrl})

    } catch (error) {
        console.log(error)
        return NextResponse.json({status:"error", message:error}, {status: 500})
    }
}
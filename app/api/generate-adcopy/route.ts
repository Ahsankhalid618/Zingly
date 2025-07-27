import { NextRequest, NextResponse } from "next/server";

// Add configuration for dynamic API route
export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const { productName, description } = await request.json();

    if (!productName || !description) {
      return NextResponse.json(
        { error: "Product name and description are required" },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert copywriter specializing in digital marketing. Create compelling ad copy for the following product:

Product Name: ${productName}
Description: ${description}

Generate the following ad copy formats (respond in JSON format):

1. Google Ad:
   - Headline (maximum 30 characters)
   - Description (maximum 90 characters)

2. Instagram Caption:
   - Engaging caption with relevant emojis and hashtags
   - Should be authentic and shareable

3. Tweet:
   - Compelling copy within 280 characters
   - Include relevant hashtags

4. Email Subject Line + Tagline:
   - Subject line that encourages opening
   - Supporting tagline

Respond in this exact JSON format:
{
  "googleAd": {
    "headline": "...",
    "description": "..."
  },
  "instagramCaption": "...",
  "tweet": "...",
  "emailSubject": {
    "subject": "...",
    "tagline": "..."
  }
}

Make all copy compelling, benefit-focused, and action-oriented.
    `;

    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("Invalid response format from AI");
    }

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid response format from AI");
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);

    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Error generating ad copy:", error);
    return NextResponse.json(
      { error: "Failed to generate ad copy" },
      { status: 500 }
    );
  }
}

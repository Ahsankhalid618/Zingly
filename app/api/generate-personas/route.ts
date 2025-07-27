import { NextRequest, NextResponse } from "next/server";

// Add configuration for dynamic API route
export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const { productDescription } = await request.json();

    if (!productDescription) {
      return NextResponse.json(
        { error: "Product description is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert UX researcher and product strategist. Based on the following product description, create 2-3 detailed user personas:

Product Description: ${productDescription}

For each persona, provide:
1. Name and demographic info (age, occupation)
2. Primary goals and motivations (3-4 items)
3. Key pain points and challenges (3-4 items)  
4. Technology familiarity level (1-5 scale, where 1=beginner, 5=expert)
5. A representative quote in first person that captures their mindset

Respond in this exact JSON format:
{
  "personas": [
    {
      "name": "...",
      "age": 0,
      "occupation": "...",
      "goals": ["...", "...", "..."],
      "painPoints": ["...", "...", "..."],
      "techFamiliarity": 0,
      "quote": "..."
    }
  ]
}

Make the personas realistic, diverse, and directly relevant to the product. Focus on creating distinct personas that represent different user segments.
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
    console.error("Error generating personas:", error);
    return NextResponse.json(
      { error: "Failed to generate personas" },
      { status: 500 }
    );
  }
}

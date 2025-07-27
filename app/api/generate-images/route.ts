import { NextRequest, NextResponse } from "next/server";

// Add configuration for dynamic API route
export const dynamic = "force-dynamic";
export const runtime = "edge";

interface GeminiPart {
  text?: string;
  inlineData?: {
    mimeType: string;
    data: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { themePrompt } = await request.json();

    if (!themePrompt) {
      return NextResponse.json(
        { error: "Theme prompt is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${apiKey}`;

    // Define specific prompts for each image type
    const prompts = [
      // Color palette prompt
      `Create a professional color palette image for "${themePrompt}". Generate a clean, modern color scheme with 5-7 complementary colors arranged in horizontal or vertical strips. Each color should be clearly defined and labeled with its hex code. The palette should reflect the mood, style, and essence of "${themePrompt}". Use a clean white background with subtle shadows for depth. Make it suitable for brand identity and design inspiration.`,

      // Product/Object image 1
      `Generate a high-quality, professional product photography image featuring "${themePrompt}". Create a clean, modern composition with studio lighting, shallow depth of field, and a minimalist background. The image should showcase the product/object in its best light with proper shadows and highlights. Use a neutral background (white, gray, or subtle gradient) and ensure the subject is the clear focal point. Make it suitable for commercial use and brand presentation.`,

      // Product/Object image 2
      `Create a lifestyle or contextual image featuring "${themePrompt}" in a natural, everyday setting. Show the product/object being used or displayed in a realistic environment that enhances its appeal. Use natural lighting, warm tones, and a relatable background that tells a story. The composition should be balanced and visually appealing while maintaining focus on the main subject. Make it suitable for marketing and social media content.`,
    ];

    // Generate 3 images in parallel with specific prompts
    const imagePromises = prompts.map(async (prompt, index) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
          },
        }),
      });

      if (!response.ok) {
        throw new Error(
          `API request ${index + 1} failed with status ${response.status}`
        );
      }

      const data = await response.json();
      const imageData = data?.candidates?.[0]?.content?.parts?.find(
        (part: GeminiPart) => part.inlineData
      )?.inlineData;

      if (!imageData) {
        throw new Error(`No image data received for variation ${index + 1}`);
      }

      const imageTypes = [
        "color-palette",
        "product-studio",
        "product-lifestyle",
      ];
      const imageDescriptions = [
        `Color palette for ${themePrompt}`,
        `Studio product shot of ${themePrompt}`,
        `Lifestyle image of ${themePrompt}`,
      ];

      return {
        url: `data:${imageData.mimeType};base64,${imageData.data}`,
        alt: imageDescriptions[index],
        id: `${imageTypes[index]}-${index + 1}`,
        type: imageTypes[index],
        description: imageDescriptions[index],
      };
    });

    const images = await Promise.all(imagePromises);

    return NextResponse.json({
      images,
      theme: themePrompt,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error generating mood board:", error);
    return NextResponse.json(
      { error: "Failed to generate mood board" },
      { status: 500 }
    );
  }
}

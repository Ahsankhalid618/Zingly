import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { productName, description } = await request.json();

    if (!productName || !description) {
      return NextResponse.json(
        { error: 'Product name and description are required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format from AI');
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);
    
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error('Error generating ad copy:', error);
    return NextResponse.json(
      { error: 'Failed to generate ad copy' },
      { status: 500 }
    );
  }
}
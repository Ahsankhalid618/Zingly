import { NextRequest, NextResponse } from 'next/server';

// Since Gemini doesn't support image generation, we'll use a curated set of stock images
// and create a mood board based on the theme prompt
export async function POST(request: NextRequest) {
  try {
    const { themePrompt } = await request.json();

    if (!themePrompt) {
      return NextResponse.json(
        { error: 'Theme prompt is required' },
        { status: 400 }
      );
    }

    // Generate curated stock images based on common themes
    const getImagesForTheme = (prompt: string) => {
      const lowerPrompt = prompt.toLowerCase();
      
      // Define theme-based image sets from Pexels
      const themeImages = {
        workspace: [
          'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        minimalist: [
          'https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        coffee: [
          'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        retro: [
          'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        nature: [
          'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        tech: [
          'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
          'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400'
        ]
      };

      // Match theme keywords to image sets
      if (lowerPrompt.includes('workspace') || lowerPrompt.includes('office') || lowerPrompt.includes('desk')) {
        return themeImages.workspace;
      } else if (lowerPrompt.includes('minimal') || lowerPrompt.includes('clean') || lowerPrompt.includes('simple')) {
        return themeImages.minimalist;
      } else if (lowerPrompt.includes('coffee') || lowerPrompt.includes('cafe') || lowerPrompt.includes('cozy')) {
        return themeImages.coffee;
      } else if (lowerPrompt.includes('retro') || lowerPrompt.includes('vintage') || lowerPrompt.includes('gaming')) {
        return themeImages.retro;
      } else if (lowerPrompt.includes('nature') || lowerPrompt.includes('outdoor') || lowerPrompt.includes('green')) {
        return themeImages.nature;
      } else if (lowerPrompt.includes('tech') || lowerPrompt.includes('modern') || lowerPrompt.includes('digital')) {
        return themeImages.tech;
      } else {
        // Default to workspace theme
        return themeImages.workspace;
      }
    };

    const imageUrls = getImagesForTheme(themePrompt);
    
    // Create image objects with descriptive alt text
    const images = imageUrls.slice(0, 6).map((url, index) => ({
      url,
      alt: `${themePrompt} inspiration ${index + 1}`
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error generating mood board:', error);
    return NextResponse.json(
      { error: 'Failed to generate mood board' },
      { status: 500 }
    );
  }
}
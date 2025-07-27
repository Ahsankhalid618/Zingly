'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from './Loader';

interface MoodBoardImage {
  url: string;
  alt: string;
}

export default function MoodBoardTool() {
  const [themePrompt, setThemePrompt] = useState('');
  const [images, setImages] = useState<MoodBoardImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!themePrompt.trim()) {
      setError('Please enter a visual theme prompt');
      return;
    }

    setLoading(true);
    setError('');
    setImages([]);

    try {
      const response = await fetch('/api/generate-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          themePrompt,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate mood board');
      }

      const data = await response.json();
      setImages(data.images);
    } catch (err) {
      setError('Failed to generate mood board. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Input Section */}
        <Card className="shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              🎨 MoodBoard AI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="themePrompt" className="block text-sm font-medium text-slate-700 mb-2">
                Visual Theme Prompt *
              </label>
              <Input
                id="themePrompt"
                value={themePrompt}
                onChange={(e) => setThemePrompt(e.target.value)}
                placeholder="e.g., 'modern minimalist workspace', 'retro gaming setup', 'cozy coffee shop'"
                className="w-full"
              />
              <p className="text-xs text-slate-500 mt-1">
                Describe the visual style, mood, or theme you want to explore
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3"
            >
              {loading ? 'Generating...' : 'Generate MoodBoard'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {loading && (
          <div className="flex justify-center">
            <Loader message="Creating your visual mood board..." />
          </div>
        )}
        
        {images.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800 text-center">
              Your MoodBoard: "{themePrompt}"
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative bg-slate-100">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400`;
                        target.alt = 'Placeholder inspiration image';
                      }}
                    />
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm text-slate-600 text-center">{image.alt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
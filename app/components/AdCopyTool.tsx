'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from './Loader';
import ResultCard from './ResultCard';

interface AdCopyResults {
  googleAd: {
    headline: string;
    description: string;
  };
  instagramCaption: string;
  tweet: string;
  emailSubject: {
    subject: string;
    tagline: string;
  };
}

export default function AdCopyTool() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [results, setResults] = useState<AdCopyResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!productName.trim() || !description.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (description.length > 200) {
      setError('Description must be 200 characters or less');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch('/api/generate-adcopy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate ad copy');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Failed to generate ad copy. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              📝 Ad Copy Remix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-muted-foreground mb-2">
                Product Name *
              </label>
              <Input
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter your product name"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-2">
                Short Description * ({description.length}/200)
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe your product and its key benefits"
                className="w-full h-24 resize-none"
                maxLength={200}
              />
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
            >
              {loading ? 'Generating...' : 'Generate Ad Copy'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {loading && <Loader message="Creating compelling ad copy..." />}
          
          {results && (
            <>
              <ResultCard
                title="Google Ad"
                icon="🎯"
                content={
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-muted-foreground">Headline:</span>
                      <p className="text-foreground bg-muted p-2 rounded mt-1">
                        {results.googleAd.headline}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Description:</span>
                      <p className="text-foreground bg-muted p-2 rounded mt-1">
                        {results.googleAd.description}
                      </p>
                    </div>
                  </div>
                }
              />

              <ResultCard
                title="Instagram Caption"
                icon="📸"
                
                content={
                  <p className="text-foreground whitespace-pre-line">
                    {results.instagramCaption}
                  </p>
                }
              />

              <ResultCard
                title="Tweet"
                icon="🐦"
                content={
                  <p className="text-foreground">
                    {results.tweet}
                  </p>
                }
              />

              <ResultCard
                title="Email Marketing"
                icon="📧"
                content={
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-muted-foreground">Subject Line:</span>
                      <p className="text-foreground bg-muted p-2 rounded mt-1">
                        {results.emailSubject.subject}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Tagline:</span>
                      <p className="text-foreground bg-muted p-2 rounded mt-1">
                        {results.emailSubject.tagline}
                      </p>
                    </div>
                  </div>
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
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
            <CardTitle className="flex items-center gap-2 text-slate-800">
              📝 Ad Copy Remix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-slate-700 mb-2">
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
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
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
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3"
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
                      <span className="font-medium text-slate-700">Headline:</span>
                      <p className="text-slate-800 bg-slate-50 p-2 rounded mt-1">
                        {results.googleAd.headline}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Description:</span>
                      <p className="text-slate-800 bg-slate-50 p-2 rounded mt-1">
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
                  <p className="text-slate-800 whitespace-pre-line">
                    {results.instagramCaption}
                  </p>
                }
              />

              <ResultCard
                title="Tweet"
                icon="🐦"
                content={
                  <p className="text-slate-800">
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
                      <span className="font-medium text-slate-700">Subject Line:</span>
                      <p className="text-slate-800 bg-slate-50 p-2 rounded mt-1">
                        {results.emailSubject.subject}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Tagline:</span>
                      <p className="text-slate-800 bg-slate-50 p-2 rounded mt-1">
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
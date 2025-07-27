'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from './Loader';
import ResultCard from './ResultCard';

interface Persona {
  name: string;
  age: number;
  occupation: string;
  goals: string[];
  painPoints: string[];
  techFamiliarity: number;
  quote: string;
}

export default function PersonaTool() {
  const [productDescription, setProductDescription] = useState('');
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!productDescription.trim()) {
      setError('Please provide a product description');
      return;
    }

    if (productDescription.length > 300) {
      setError('Description must be 300 characters or less');
      return;
    }

    setLoading(true);
    setError('');
    setPersonas([]);

    try {
      const response = await fetch('/api/generate-personas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productDescription,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate personas');
      }

      const data = await response.json();
      setPersonas(data.personas);
    } catch (err) {
      setError('Failed to generate personas. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTechFamiliarityLabel = (level: number) => {
    const labels = {
      1: 'Beginner',
      2: 'Basic',
      3: 'Intermediate',
      4: 'Advanced',
      5: 'Expert'
    };
    return labels[level as keyof typeof labels] || 'Unknown';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <Card className="shadow-lg lg:col-span-1 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              👤 QuickPersona
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="productDesc" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Product Description * ({productDescription.length}/300)
              </label>
              <Textarea
                id="productDesc"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Describe your product, its features, target market, and key benefits..."
                className="w-full h-32 resize-none"
                maxLength={300}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-3"
            >
              {loading ? 'Generating...' : 'Generate Personas'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-6">
          {loading && <Loader message="Creating detailed user personas..." />}
          
          {personas.map((persona, index) => (
            <ResultCard
              key={index}
              title={`Persona ${index + 1}: ${persona.name}`}
              icon="👤"
              content={
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Demographics:</span>
                      <p className="text-slate-800 dark:text-slate-200 mt-1">
                        {persona.age} years old, {persona.occupation}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Tech Familiarity:</span>
                      <p className="text-slate-800 dark:text-slate-200 mt-1">
                        {persona.techFamiliarity}/5 - {getTechFamiliarityLabel(persona.techFamiliarity)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Goals & Motivations:</span>
                    <ul className="list-disc list-inside text-slate-800 dark:text-slate-200 mt-1 space-y-1">
                      {persona.goals.map((goal, idx) => (
                        <li key={idx}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Pain Points:</span>
                    <ul className="list-disc list-inside text-slate-800 dark:text-slate-200 mt-1 space-y-1">
                      {persona.painPoints.map((pain, idx) => (
                        <li key={idx}>{pain}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-slate-400 dark:border-slate-600">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Quote:</span>
                    <p className="text-slate-800 dark:text-slate-200 italic mt-1">&ldquo;{persona.quote}&rdquo;</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
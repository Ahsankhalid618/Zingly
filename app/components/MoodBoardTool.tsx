"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "./Loader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MoodBoardImage {
  url: string;
  alt: string;
  id: string;
  type?: string;
  description?: string;
}

export default function MoodBoardTool() {
  const [themePrompt, setThemePrompt] = useState("");
  const [images, setImages] = useState<MoodBoardImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<MoodBoardImage | null>(
    null
  );

  const handleGenerate = async () => {
    if (!themePrompt.trim()) {
      setError("Please enter a visual theme prompt");
      return;
    }

    setLoading(true);
    setError("");
    setImages([]);

    try {
      const response = await fetch("/api/generate-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          themePrompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate mood board");
      }

      const data = await response.json();
      setImages(data.images);
    } catch (err) {
      setError("Failed to generate mood board. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (image: MoodBoardImage) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = image.url;
    link.download = `moodboard-${image.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <label
                htmlFor="themePrompt"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
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
              {loading ? "Generating..." : "Generate MoodBoard"}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Card
                  key={image.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square relative bg-slate-100 group">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400`;
                        target.alt = "Placeholder inspiration image";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              onClick={() => setSelectedImage(image)}
                              variant="secondary"
                              className="bg-white text-black hover:bg-gray-100"
                            >
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Image Preview</DialogTitle>
                              <DialogDescription>
                                Generated for theme: {themePrompt}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                              <Image
                                src={selectedImage?.url || ""}
                                alt={selectedImage?.alt || ""}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                                unoptimized
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          onClick={() => handleDownload(image)}
                          variant="secondary"
                          className="bg-white text-black hover:bg-gray-100"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <p className="text-sm text-slate-600 text-center">
                      {image.type
                        ? image.description
                        : `Variation ${index + 1}`}
                    </p>
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

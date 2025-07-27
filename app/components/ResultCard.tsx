'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface ResultCardProps {
  title: string;
  icon: string;
  content: ReactNode;
}

export default function ResultCard({ title, icon, content }: ResultCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 border-l-4 border-l-slate-400">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-slate-800 text-lg">
          <span>{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
}
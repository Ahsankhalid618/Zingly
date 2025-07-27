'use client';

import { useState } from 'react';
import TabSwitcher from './components/TabSwitcher';
import AdCopyTool from './components/AdCopyTool';
import PersonaTool from './components/PersonaTool';
import MoodBoardTool from './components/MoodBoardTool';

export default function Home() {
  const [activeTab, setActiveTab] = useState('adcopy');

  const tabs = [
    { id: 'adcopy', label: 'Ad Copy Remix', icon: '📝' },
    { id: 'persona', label: 'QuickPersona', icon: '👤' },
    { id: 'moodboard', label: 'MoodBoard AI', icon: '🎨' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'adcopy':
        return <AdCopyTool />;
      case 'persona':
        return <PersonaTool />;
      case 'moodboard':
        return <MoodBoardTool />;
      default:
        return <AdCopyTool />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Startup Toolkit
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            AI-powered tools to build your MVP faster. Generate compelling ad copy, 
            understand your users, and create visual inspiration.
          </p>
        </div>

        {/* Tab Navigation */}
        <TabSwitcher 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {/* Active Tab Content */}
        <div className="mt-8">
          {renderActiveTab()}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-slate-200">
          <p className="text-slate-500">
            Built with Next.js, Tailwind CSS, and Gemini AI
          </p>
        </footer>
      </div>
    </div>
  );
}
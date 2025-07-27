'use client';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200
            ${activeTab === tab.id
              ? 'bg-slate-800 text-white shadow-lg transform scale-105'
              : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-md hover:shadow-lg'
            }
          `}
          aria-label={`Switch to ${tab.label} tool`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="text-sm md:text-base">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
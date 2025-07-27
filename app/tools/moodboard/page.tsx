import MoodBoardTool from "@/app/components/MoodBoardTool";

export default function MoodBoardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          MoodBoard AI
        </h1>
        <p className="text-lg text-slate-300 dark:text-slate-300 max-w-2xl mx-auto">
          Create stunning mood boards and visual direction for your brand in
          minutes. Let AI help you define your perfect aesthetic.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Example Mood Boards
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Modern Tech Startup
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Color Palette:</strong> Deep navy, electric blue, crisp
                white
              </p>
              <p className="mb-2">
                <strong>Style:</strong> Minimalist, geometric, bold
              </p>
              <p className="mb-2">
                <strong>Elements:</strong> Abstract shapes, gradient overlays
              </p>
              <p>
                <strong>Mood:</strong> Professional, innovative,
                forward-thinking
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Eco-Friendly Brand
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Color Palette:</strong> Sage green, earth tones, natural
                whites
              </p>
              <p className="mb-2">
                <strong>Style:</strong> Organic, natural, sustainable
              </p>
              <p className="mb-2">
                <strong>Elements:</strong> Botanical illustrations, recycled
                textures
              </p>
              <p>
                <strong>Mood:</strong> Conscious, authentic, harmonious
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Luxury Lifestyle
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Color Palette:</strong> Gold, black, cream
              </p>
              <p className="mb-2">
                <strong>Style:</strong> Elegant, sophisticated, premium
              </p>
              <p className="mb-2">
                <strong>Elements:</strong> Marble textures, metallic accents
              </p>
              <p>
                <strong>Mood:</strong> Exclusive, refined, aspirational
              </p>
            </div>
          </div>
        </div>
      </div>

      <MoodBoardTool />
    </div>
  );
}

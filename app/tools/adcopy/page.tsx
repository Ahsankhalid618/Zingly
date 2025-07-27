import AdCopyTool from "@/app/components/AdCopyTool";

export default function AdCopyPage() {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Ad Copy Remix
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Generate high-converting ad copy for multiple platforms in seconds.
          Optimize your marketing campaigns with AI-powered copywriting.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-100 mb-4">
          Example Results
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-100 mb-2">Google Ads</h3>
            <div className="text-sm text-slate-300">
              <p className="font-medium mb-1">
                Headline: &quot;10X Your Productivity | AI-Powered Task
                Manager&quot;
              </p>
              <p>
                Description: &quot;Streamline your workflow with smart
                automation. Get more done in less time. Start free trial
                today!&quot;
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-100 mb-2">Instagram Post</h3>
            <div className="text-sm text-slate-300">
              <p>
                🚀 Ready to transform your workflow? Our AI-powered task manager
                helps you focus on what matters most.
              </p>
              <p className="mt-2">
                #Productivity #WorkSmarter #AI #TaskManagement
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-100 mb-2">Email Subject</h3>
            <div className="text-sm text-slate-300">
              <p className="font-medium mb-1">
                Subject: &quot;Double Your Output with Smart Task
                Management&quot;
              </p>
              <p>
                Preview: &quot;See how AI can transform your daily
                workflow...&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <AdCopyTool />
    </div>
  );
}

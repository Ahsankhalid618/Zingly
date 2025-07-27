import PersonaTool from "@/app/components/PersonaTool";

export default function PersonaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          QuickPersona
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Create detailed user personas in minutes. Understand your target
          audience with AI-generated insights and authentic user profiles.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Example Personas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Tech-Savvy Professional
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Demographics:</strong> Sarah, 32, Product Manager
              </p>
              <p className="mb-2">
                <strong>Goals:</strong> Streamline team workflows, automate
                repetitive tasks
              </p>
              <p className="mb-2">
                <strong>Pain Points:</strong> Time management, team coordination
              </p>
              <p>
                <strong>Quote:</strong> &ldquo;I need tools that help my team
                move faster without sacrificing quality.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Small Business Owner
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Demographics:</strong> Michael, 45, Retail Store Owner
              </p>
              <p className="mb-2">
                <strong>Goals:</strong> Grow customer base, improve online
                presence
              </p>
              <p className="mb-2">
                <strong>Pain Points:</strong> Marketing costs, customer
                retention
              </p>
              <p>
                <strong>Quote:</strong> &ldquo;I want to compete with bigger
                brands without breaking the bank.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Creative Freelancer
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                <strong>Demographics:</strong> Emma, 28, Graphic Designer
              </p>
              <p className="mb-2">
                <strong>Goals:</strong> Find more clients, showcase portfolio
              </p>
              <p className="mb-2">
                <strong>Pain Points:</strong> Project management, client
                communication
              </p>
              <p>
                <strong>Quote:</strong> &ldquo;I need to spend less time on
                admin and more time creating.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <PersonaTool />
    </div>
  );
}

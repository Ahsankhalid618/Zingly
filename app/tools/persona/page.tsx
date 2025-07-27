import PersonaTool from "@/app/components/PersonaTool";

export default function PersonaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">QuickPersona</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Create detailed user personas in minutes. Understand your target
          audience with AI-generated insights and authentic user profiles.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Example Personas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 mb-2">
              Tech-Savvy Professional
            </h3>
            <div className="text-sm text-slate-600">
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
                <strong>Quote:</strong> "I need tools that help my team move
                faster without sacrificing quality."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 mb-2">
              Small Business Owner
            </h3>
            <div className="text-sm text-slate-600">
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
                <strong>Quote:</strong> "I want to compete with bigger brands
                without breaking the bank."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-medium text-slate-900 mb-2">
              Creative Freelancer
            </h3>
            <div className="text-sm text-slate-600">
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
                <strong>Quote:</strong> "I need to spend less time on admin and
                more time creating."
              </p>
            </div>
          </div>
        </div>
      </div>

      <PersonaTool />
    </div>
  );
}

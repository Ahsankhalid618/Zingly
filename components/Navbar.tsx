import Link from "next/link";
import ZinglyLogo from "./ZinglyLogo";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ZinglyLogo size="sm" className="text-blue-600" />
            <span className="text-xl font-bold text-slate-900">
              Zingly
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/tools"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/pricing"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

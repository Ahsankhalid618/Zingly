import Link from "next/link";
import ZinglyLogo from "./ZinglyLogo";

export default function Footer() {
  return (
    <footer className=" border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ZinglyLogo size="sm" className="text-blue-600" />
              <h3 className="text-lg font-semibold">Zingly</h3>
            </div>
            <p className="text-sm">
              Transform your startup with our magical AI-powered tools.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/adcopy"
                  className="text-sm transition-colors"
                >
                  Ad Copy Remix
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/persona"
                  className="text-sm transition-colors"
                >
                  QuickPersona
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/moodboard"
                  className="text-sm transition-colors"
                >
                  MoodBoard AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm">
            © {new Date().getFullYear()} Zingly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

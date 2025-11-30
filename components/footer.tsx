import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              The Hammitt Group
            </h3>
            <p className="text-gray-400 mb-4">
              Premier recruiting agency specializing in Texas manufacturing.
              Connecting top talent with leading manufacturers across DFW,
              Austin, Houston, and San Antonio.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:contact@thehammittgroup.com"
                  className="hover:text-white transition-colors"
                >
                  contact@thehammittgroup.com
                </a>
              </p>
              <p>
                <a
                  href="tel:2544797482"
                  className="hover:text-white transition-colors"
                >
                  (254) 479-7482
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/positions"
                  className="hover:text-white transition-colors"
                >
                  Positions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  For Employers
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-resume"
                  className="hover:text-white transition-colors"
                >
                  For Candidates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Hammitt Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


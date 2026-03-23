import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { APP_ICON, APP_STORE_URL } from '../constants'

const NAV_LINKS = [
  { href: '#features', label: 'Tính năng' },
  { href: '#showcase', label: 'Giao diện' },
  { href: '#compatibility', label: 'Tương thích' },
  { href: '#privacy', label: 'Bảo mật' },
  { href: '#download', label: 'Tải về' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={APP_ICON}
              alt="EasyMemo"
              className="w-9 h-9 rounded-xl shadow-lg shadow-amber-200/50 group-hover:shadow-amber-300/70 transition-shadow"
            />
            <span className="font-bold text-lg text-slate-800">EasyMemo</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors"
            >
              App Store
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-2 pt-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-600 hover:text-amber-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full"
            >
              App Store
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

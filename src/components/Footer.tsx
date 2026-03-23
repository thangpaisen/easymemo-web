import { Heart } from 'lucide-react'
import { APP_ICON, APP_STORE_URL, CONTACT_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={APP_ICON} alt="EasyMemo" className="w-8 h-8 rounded-xl" />
            <span className="font-bold text-slate-800">EasyMemo</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition-colors"
            >
              Liên hệ
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition-colors"
            >
              App Store
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-slate-400">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Thang Nguyen
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-slate-300">
          &copy; {new Date().getFullYear()} EasyMemo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

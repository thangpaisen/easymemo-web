import { ArrowDown } from 'lucide-react'
import { APP_STORE_URL, SCREENSHOTS } from '../constants'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-50 rounded-full opacity-60 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Miễn phí trên App Store
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100 opacity-0">
          Ghi chú nhanh,
          <br />
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            đơn giản & bảo mật
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 opacity-0">
          EasyMemo giúp bạn ghi lại, tổ chức và quản lý ý tưởng một cách dễ dàng.
          Thiết kế tối giản, tốc độ nhanh, bảo mật tuyệt đối.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300 opacity-0">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/20"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Tải về trên</div>
              <div className="text-base font-bold -mt-0.5">App Store</div>
            </div>
          </a>

          <a
            href="#features"
            className="flex items-center gap-2 px-6 py-4 text-slate-600 font-medium hover:text-amber-600 transition-colors"
          >
            Tìm hiểu thêm
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

        {/* Phone mockup with real screenshot */}
        <div className="relative mx-auto w-64 sm:w-72 animate-fade-in-up delay-400 opacity-0">
          <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30 animate-float">
            <div className="rounded-[2.4rem] overflow-hidden">
              <img
                src={SCREENSHOTS.iphone[0]}
                alt="EasyMemo - Màn hình chính"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

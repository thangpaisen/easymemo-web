import { APP_STORE_URL } from '../constants'

export default function Download() {
  return (
    <section id="download" className="py-24 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Sẵn sàng ghi chú?
        </h2>
        <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto">
          Tải EasyMemo miễn phí ngay hôm nay và bắt đầu tổ chức ý tưởng của bạn.
        </p>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 shadow-2xl shadow-slate-900/25"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-80">Tải về miễn phí trên</div>
            <div className="text-lg font-bold -mt-0.5">App Store</div>
          </div>
        </a>

        <p className="mt-6 text-sm text-slate-400">
          Yêu cầu iOS 15.1 trở lên &middot; 58.1 MB &middot; Miễn phí
        </p>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { SCREENSHOTS } from '../constants'

const IPHONE_LABELS = [
  'Màn hình chính',
  'Danh sách ghi chú',
  'Soạn ghi chú',
  'Danh mục',
  'Tìm kiếm',
  'Cài đặt',
]

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<'iphone' | 'ipad'>('iphone')
  const screenshots = SCREENSHOTS[activeTab]

  return (
    <section id="showcase" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Giao diện trực quan
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
            Thiết kế tối giản, tập trung vào nội dung. Mọi thao tác chỉ cần vài chạm.
          </p>

          {/* Tab switcher */}
          <div className="inline-flex bg-slate-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('iphone')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'iphone'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              iPhone
            </button>
            <button
              onClick={() => setActiveTab('ipad')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'ipad'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              iPad
            </button>
          </div>
        </div>

        {/* Screenshots carousel */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className={`flex gap-6 ${activeTab === 'ipad' ? 'justify-start' : 'justify-start'}`} style={{ minWidth: 'min-content' }}>
            {screenshots.map((src, i) => (
              <div key={`${activeTab}-${i}`} className="flex-shrink-0 text-center group">
                <div className={`relative mx-auto ${activeTab === 'iphone' ? 'w-52' : 'w-72'}`}>
                  <div className="bg-slate-900 rounded-[2rem] p-2 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="rounded-[1.6rem] overflow-hidden">
                      <img
                        src={src}
                        alt={activeTab === 'iphone' && i < IPHONE_LABELS.length ? IPHONE_LABELS[i] : `Ảnh chụp màn hình ${i + 1}`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                {activeTab === 'iphone' && i < IPHONE_LABELS.length && (
                  <p className="text-sm text-slate-500 mt-4 font-medium">{IPHONE_LABELS[i]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <p className="text-center text-xs text-slate-400 mt-4">
          ← Vuốt để xem thêm →
        </p>
      </div>
    </section>
  )
}

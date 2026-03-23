import { Smartphone, Tablet, Monitor, Glasses } from 'lucide-react'

const DEVICES = [
  {
    icon: Smartphone,
    name: 'iPhone',
    requirement: 'iOS 15.1+',
    description: 'Trải nghiệm tốt nhất trên iPhone',
  },
  {
    icon: Tablet,
    name: 'iPad',
    requirement: 'iPadOS 15.1+',
    description: 'Giao diện tối ưu cho màn hình lớn',
  },
  {
    icon: Monitor,
    name: 'Mac',
    requirement: 'macOS 12.0+ (Apple Silicon)',
    description: 'Chạy native trên chip M1 trở lên',
  },
  {
    icon: Glasses,
    name: 'Apple Vision',
    requirement: 'visionOS 1.0+',
    description: 'Sẵn sàng cho tương lai',
  },
]

export default function Compatibility() {
  return (
    <section id="compatibility" className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Hoạt động trên mọi thiết bị Apple
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Một app, mọi nền tảng. Đồng bộ ghi chú của bạn ở mọi nơi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVICES.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-slate-50 rounded-2xl mb-4">
                <device.icon className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{device.name}</h3>
              <div className="text-xs font-mono text-amber-600 bg-amber-50 inline-block px-2 py-0.5 rounded mb-2">
                {device.requirement}
              </div>
              <p className="text-sm text-slate-500">{device.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            Dung lượng: 58.1 MB &middot; Ngôn ngữ: English &middot; Đánh giá: 4+
          </p>
        </div>
      </div>
    </section>
  )
}

import { FolderOpen, Zap, ShieldCheck, CloudUpload, Palette, Search } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Nhanh chóng',
    description: 'Tạo ghi chú chỉ trong vài giây. Giao diện tối giản, không có gì thừa.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: FolderOpen,
    title: 'Phân loại thông minh',
    description: 'Tạo danh mục để tổ chức ghi chú theo cách của bạn. Dễ dàng tìm kiếm và quản lý.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: CloudUpload,
    title: 'Sao lưu thông minh',
    description: 'Tự động sao lưu dữ liệu. Không bao giờ mất ghi chú quan trọng của bạn.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: ShieldCheck,
    title: 'Bảo mật tuyệt đối',
    description: 'Dữ liệu của bạn là của bạn. Không thu thập, không chia sẻ với bất kỳ ai.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Palette,
    title: 'Giao diện đẹp',
    description: 'Thiết kế hiện đại, thân thiện. Trải nghiệm mượt mà trên mọi thiết bị Apple.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    icon: Search,
    title: 'Tìm kiếm tức thì',
    description: 'Tìm bất kỳ ghi chú nào trong tích tắc. Bộ lọc theo danh mục, thời gian.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Mọi thứ bạn cần, không gì thừa
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            EasyMemo được thiết kế với triết lý tối giản — chỉ giữ lại những gì thực sự cần thiết.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bg} mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

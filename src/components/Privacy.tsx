import { Lock, Eye, Server } from 'lucide-react'

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Quyền riêng tư là ưu tiên hàng đầu
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Chúng tôi tin rằng dữ liệu của bạn thuộc về bạn — không ai khác.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex p-4 bg-amber-500/10 rounded-2xl mb-6 animate-pulse-glow">
              <Lock className="w-10 h-10 text-amber-400" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Không thu thập dữ liệu
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="inline-flex p-3 bg-white/5 rounded-xl mb-3">
                  <Eye className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-medium text-slate-300">Không theo dõi</div>
                <div className="text-xs text-slate-500 mt-1">Không analytics, không tracking</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-white/5 rounded-xl mb-3">
                  <Server className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-medium text-slate-300">Lưu trữ cục bộ</div>
                <div className="text-xs text-slate-500 mt-1">Dữ liệu chỉ lưu trên thiết bị</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-white/5 rounded-xl mb-3">
                  <Lock className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-medium text-slate-300">Không chia sẻ</div>
                <div className="text-xs text-slate-500 mt-1">Không bán dữ liệu cho bên thứ 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Droplet, Sun, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041524] via-[#062336] to-[#0a1f35]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B3AE] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8A3D] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FFC857] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-[#00B3AE] text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-[#00B3AE]/10 rounded-full border border-[#00B3AE]/20">
                Global Energy & Lubricant Brand
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Powering Engines.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3AE] to-[#FFC857]">
                Fueling Progress.
              </span>
            </h1>

            <p className="text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed">
              Premium lubricants, car care products, and clean solar solutions across Africa and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#00B3AE] to-[#00767A] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#00B3AE]/50 transition-all flex items-center justify-center gap-2">
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#00B3AE] text-[#00B3AE] rounded-full font-semibold hover:bg-[#00B3AE] hover:text-white transition-all">
                Explore Solar Solutions
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8566941/pexels-photo-8566941.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Solar panels and renewable energy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041524] via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#00B3AE]/90 to-[#00767A]/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplet className="w-5 h-5 text-white" />
                        <h4 className="text-white font-semibold text-sm">Lubricants</h4>
                      </div>
                      <p className="text-gray-100 text-xs">High-performance</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FFC857]/90 to-[#FF8A3D]/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-5 h-5 text-white" />
                        <h4 className="text-white font-semibold text-sm">Solar</h4>
                      </div>
                      <p className="text-gray-100 text-xs">Clean energy</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FF8A3D]/90 to-[#FFC857]/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-white" />
                        <h4 className="text-white font-semibold text-sm">EV</h4>
                      </div>
                      <p className="text-gray-100 text-xs">Future-ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

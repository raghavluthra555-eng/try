import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#062336] to-[#041524]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            See Our Solutions in Action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch how Kashe Energy is transforming industries across Africa with premium lubricants and sustainable energy solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative h-80 bg-gradient-to-br from-[#00B3AE]/20 to-[#FF8A3D]/20">
              <img
                src="https://images.pexels.com/photos/8566458/pexels-photo-8566458.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Industrial lubricant operations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041524] via-transparent to-transparent"></div>

              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#00B3AE] to-[#00767A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-[#00B3AE]/50">
                  <Play className="w-10 h-10 text-white fill-white" />
                </div>
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Industrial Solutions</h3>
              <p className="text-gray-400">See how our lubricants power heavy machinery and keep operations running smoothly.</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative h-80 bg-gradient-to-br from-[#FFC857]/20 to-[#FF8A3D]/20">
              <img
                src="https://images.pexels.com/photos/8566462/pexels-photo-8566462.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Solar farm energy generation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041524] via-transparent to-transparent"></div>

              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFC857] to-[#FF8A3D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-[#FFC857]/50">
                  <Play className="w-10 h-10 text-white fill-white" />
                </div>
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Solar Energy</h3>
              <p className="text-gray-400">Discover how our sustainable solar solutions bring clean energy to homes and businesses.</p>
            </div>
          </div>
        </div>

        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-auto px-6">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-6 text-white text-3xl font-bold hover:text-[#00B3AE] transition-colors"
              >
                ✕
              </button>

              <div className="relative w-full bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Kashe Energy Solutions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

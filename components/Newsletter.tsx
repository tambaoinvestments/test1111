import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-tambao-green to-emerald-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Đăng Ký Nhận Tin
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Nhận thông tin mới nhất về thị trường, khóa học và các hoạt động của Tam Bảo Group
        </p>

        {status === 'success' ? (
          <div className="inline-flex items-center gap-3 bg-white text-green-600 px-6 py-4 rounded-lg font-medium">
            <CheckCircle className="w-5 h-5" />
            Cảm ơn bạn đã đăng ký!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-slate-900"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-slate-100 text-tambao-green font-medium px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
              >
                Đăng Ký
              </button>
            </div>
            {status === 'error' && (
              <p className="mt-3 text-white/90 text-sm">
                Vui lòng nhập email hợp lệ
              </p>
            )}
          </form>
        )}

        <p className="mt-6 text-white/70 text-sm">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Thông tin của bạn sẽ được bảo mật.
        </p>
      </div>
    </div>
  );
};

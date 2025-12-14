import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Copy, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    phone: '',
    email: '',
    services: [] as string[],
    marketStatus: '진입 전',
    budget: '',
    message: '',
    agree: false
  });
  
  const [showGuide, setShowGuide] = useState(false);

  const serviceOptions = [
    '온라인 리뷰 & 체험단', 
    'KOL / KOC 마케팅', 
    '온라인 판매 대행', 
    '플랫폼 운영 (Shopee/TikTok)', 
    '소비자 리서치', 
    '기타 문의'
  ];

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => {
      if (prev.services.includes(option)) {
        return { ...prev, services: prev.services.filter(s => s !== option) };
      } else {
        return { ...prev, services: [...prev.services, option] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKakaoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // Construct the message
    const message = `[Vietnam On-Line Lab 상담 신청]

■ 브랜드/기업명: ${formData.brandName}
■ 담당자: ${formData.contactName}
■ 연락처: ${formData.phone}
■ 이메일: ${formData.email}
■ 진출현황: ${formData.marketStatus}
■ 예산범위: ${formData.budget}
■ 관심분야: ${formData.services.join(', ')}

■ 문의내용:
${formData.message}`;

    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(message);
      
      // Show success state
      setShowGuide(true);
      
      // Alert and open window
      alert('문의 내용이 클립보드에 복사되었습니다.\n잠시 후 열리는 카카오톡 창에 붙여넣기(Ctrl+V) 해주세요.');
      window.open('http://pf.kakao.com/_YfxiUn/chat', '_blank');
      
    } catch (err) {
      console.error('Clipboard failed', err);
      // Fallback just in case clipboard fails
      setShowGuide(true);
      window.open('http://pf.kakao.com/_YfxiUn/chat', '_blank');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">문의하기</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            베트남 온라인 진출에 관한 무엇이든 물어보세요.<br/>
            가장 빠르고 정확한 카카오톡 상담으로 연결됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info Side */}
          <div className="lg:col-span-1 bg-slate-900 p-10 rounded-2xl text-white h-fit shadow-xl">
            <h2 className="text-2xl font-bold mb-10">Contact Info</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <Phone className="text-orange-500 shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg opacity-80 mb-2">전화 문의</h3>
                  <p className="text-lg font-bold tracking-wide">010-7320-5565 (KR)</p>
                  <p className="text-lg font-bold tracking-wide">+84-93-219-4041 (VN)</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Mail className="text-orange-500 shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg opacity-80 mb-2">이메일</h3>
                  <p className="text-lg font-bold tracking-wide">193market@gmail.com</p>
                </div>
              </div>
              <a 
                href="http://pf.kakao.com/_YfxiUn/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-5 hover:opacity-80 transition-opacity group"
              >
                <MessageSquare className="text-orange-500 shrink-0 mt-1 group-hover:text-orange-400" size={28} />
                <div>
                  <h3 className="font-semibold text-lg opacity-80 mb-2 group-hover:text-orange-400">카카오톡 문의</h3>
                  <p className="text-lg font-bold flex items-center gap-2 mb-1">카카오톡 클릭 💬</p>
                  <p className="text-base font-medium text-orange-400">ID: infovina</p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-lg opacity-80 mb-2">오피스</h3>
                  <p className="text-lg font-bold mb-3 leading-relaxed"><span className="text-orange-400 inline-block w-8">KR</span> 서울 강서구 화곡로 129 305호</p>
                  <p className="text-lg font-bold leading-relaxed"><span className="text-orange-400 inline-block w-8">VN</span> 18A/16 Nguyễn Thị Minh Khai, Đa Kao, Quận 1, TP.HCM</p>
                </div>
              </div>
            </div>
            <div className="mt-14 pt-8 border-t border-slate-700">
               <p className="text-base text-slate-400 leading-relaxed">
                 평일: 09:00 - 18:00 (한국시간)<br/>
                 점심: 12:00 - 13:00<br/>
                 주말 및 공휴일 휴무
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            {showGuide ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-500">
                <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-10">
                  <MessageSquare size={48} fill="currentColor" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">카카오톡 상담창이 열렸습니다.</h2>
                
                <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl max-w-xl w-full mb-10">
                  <p className="text-xl text-slate-700 font-medium mb-5">
                    <span className="text-green-600 font-bold flex items-center justify-center gap-3 mb-3">
                      <CheckCircle2 size={28} /> 문의 내용 복사 완료!
                    </span>
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    열려있는 카카오톡 채팅창 입력칸에<br/>
                    <strong className="text-slate-900 bg-yellow-100 px-2">붙여넣기 (Ctrl + V)</strong> 하시면<br/>
                    작성하신 내용이 바로 전송됩니다.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href="http://pf.kakao.com/_YfxiUn/chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-[#FEE500] hover:bg-[#FDD835] text-[#3c1e1e] font-bold rounded-lg transition-colors flex items-center justify-center gap-3 text-lg"
                  >
                    <MessageSquare size={22} fill="currentColor" />
                    카카오톡 창 다시 열기
                  </a>
                  <button 
                    onClick={() => setShowGuide(false)}
                    className="px-10 py-4 text-slate-500 hover:text-slate-800 font-medium transition-colors text-lg"
                  >
                    작성 화면으로 돌아가기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleKakaoSubmit} className="space-y-10">
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl mb-8 flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-orange-600 mt-1">
                    <MessageSquare size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">빠르고 확실한 카카오톡 상담</h4>
                    <p className="text-base text-slate-600 leading-snug">
                      아래 내용을 작성하고 신청 버튼을 누르면, <strong>내용이 자동으로 복사</strong>되고 카카오톡 상담창이 열립니다.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">회사/브랜드명</label>
                    <input 
                      type="text" 
                      name="brandName" 
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="브랜드 또는 회사명"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">담당자 성함</label>
                    <input 
                      type="text" 
                      name="contactName" 
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="성함"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">연락처</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="010-1234-5678"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">이메일</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">현재 베트남 온라인 진출 여부</label>
                    <select 
                      name="marketStatus" 
                      value={formData.marketStatus}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="진입 전">진입 전 (준비 단계)</option>
                      <option value="초기 진입">초기 진입 (테스트 단계)</option>
                      <option value="운영 중">운영 중 (확장 단계)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-slate-700 mb-3">월 예산 범위</label>
                    <select 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">선택해주세요</option>
                      <option value="100만원 미만">100만원 미만</option>
                      <option value="100~300만원">100~300만원</option>
                      <option value="300~500만원">300~500만원</option>
                      <option value="500만원 이상">500만원 이상</option>
                      <option value="미정">미정 (상담 후 결정)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-5">관심 분야 (중복 선택)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {serviceOptions.map(option => (
                      <label key={option} className={`flex items-center gap-3 p-5 rounded-lg border cursor-pointer transition-all ${
                        formData.services.includes(option) ? 'bg-orange-50 border-orange-500 text-orange-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}>
                        <input 
                          type="checkbox" 
                          checked={formData.services.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="w-6 h-6 accent-orange-600 shrink-0"
                        />
                        <span className="text-lg font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-3">문의 내용</label>
                  <textarea 
                    name="message" 
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    placeholder="현재 상황이나 고민을 자세히 적어주시면 더 정확한 상담이 가능합니다."
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg">
                  <input 
                    type="checkbox" 
                    id="agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData(prev => ({...prev, agree: e.target.checked}))}
                    className="w-6 h-6 accent-orange-600 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-lg text-slate-600 cursor-pointer select-none">
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-6 bg-[#FEE500] hover:bg-[#FDD835] text-[#3c1e1e] font-black text-xl rounded-xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-3"
                >
                  <MessageSquare size={24} fill="currentColor" />
                  카카오톡으로 상담 신청하기
                  <span className="text-base font-medium opacity-80">(내용 자동 복사)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
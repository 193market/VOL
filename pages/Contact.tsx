import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  // 초기 데이터 상수화
  const initialFormData = {
    brandName: '',    // 회사/브랜드명
    contactName: '',  // 담당자 성함
    phone: '',        // 연락처
    email: '',        // 이메일
    services: [] as string[], // 관심 분야
    marketStatus: '진입 전',  // 진출 단계
    budget: '',       // 예산
    message: '',      // 문의 내용
    agree: false      // 개인정보 동의
  };

  // 1. 입력된 내용을 저장하는 공간
  const [formData, setFormData] = useState(initialFormData);
  
  const [isSubmitting, setIsSubmitting] = useState(false); // 전송 중 상태
  const [isSuccess, setIsSuccess] = useState(false);       // 전송 성공 여부
  const [errorMessage, setErrorMessage] = useState('');    // 에러 메시지 저장

  // ▼▼▼ Formspree 주소 확인 (본인의 ID가 맞는지 꼭 확인하세요!) ▼▼▼
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzznwrnj";

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

  // 새로운 문의 작성하기 (초기화 함수)
  const handleReset = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setErrorMessage('');
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // 기존 에러 메시지 초기화
    
    if (!formData.agree) {
      setErrorMessage('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // 이메일 공백 제거 및 유효성 검사 강화
    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setErrorMessage('이메일 주소 형식이 올바르지 않습니다. (예: user@example.com)');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // 폼 데이터 (중요: email 필드가 덮어씌워지도록 순서 배치)
          ...formData,
          email: cleanEmail, // 공백 제거된 이메일 사용
          // 배열을 문자열로 변환
          services: formData.services.join(', '),
          // 이메일 제목 설정
          _subject: `[VOL 문의] ${formData.brandName} - ${formData.contactName}님`
          // _replyto 제거 (email 필드로 충분함)
        })
      });

      const data = await response.json();

      if (response.ok) {
        // 성공 시
        setIsSuccess(true);
        window.scrollTo(0, 0);
      } else {
        // 실패 시 에러 메시지 처리
        if (data.errors && data.errors.length > 0) {
          // 영문 에러 메시지를 한글로 변환해서 보여줌
          const translatedErrors = data.errors.map((err: any) => {
            if (err.message && err.message.includes("should be an email")) {
               return "이메일 주소를 정확히 입력해주세요.";
            }
            return err.message;
          }).join(", ");
          setErrorMessage(`전송 실패: ${translatedErrors}`);
        } else {
          setErrorMessage('전송에 실패했습니다. 입력하신 정보를 다시 확인해주세요.');
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage('서버 연결 오류가 발생했습니다. 잠시 후 다시 시도하거나 이메일로 직접 연락주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">문의하기</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            베트남 온라인 진출에 관한 무엇이든 물어보세요.<br/>
            담당자가 내용을 확인 후 빠르면 1일 이내에 연락드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Side */}
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
            {isSuccess ? (
              // 성공 화면
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-10">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">문의가 성공적으로 접수되었습니다.</h2>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  담당자가 내용을 확인 후<br/>
                  입력해주신 연락처 또는 이메일로 빠르게 답변드리겠습니다.
                </p>

                <div className="flex flex-col gap-4 w-full max-w-sm">
                  <button 
                    onClick={handleReset} // 수정됨: 새로고침 대신 초기화 함수 호출
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors text-lg"
                  >
                    새로운 문의 작성하기
                  </button>
                  <Link 
                    to="/"
                    className="px-8 py-4 border border-slate-300 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-lg flex justify-center items-center"
                  >
                    메인으로 돌아가기
                  </Link>
                </div>
              </div>
            ) : (
              // 입력 폼 화면
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl mb-8 flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-orange-600 mt-1">
                    <Send size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">간편 상담 신청</h4>
                    <p className="text-base text-slate-600 leading-snug">
                      아래 내용을 작성해주시면 담당자 이메일로 즉시 전송됩니다.
                    </p>
                  </div>
                </div>

                {/* 에러 메시지 표시 영역 */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="shrink-0 mt-0.5" size={20} />
                    <p className="font-medium">{errorMessage}</p>
                  </div>
                )}

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
                      placeholder="답변 받으실 이메일"
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

                <div className="space-y-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-6 font-black text-xl rounded-xl transition-all shadow-lg flex justify-center items-center gap-3 ${
                      isSubmitting 
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      '전송 중입니다...'
                    ) : (
                      <>
                        <Send size={24} />
                        문의 메일 보내기
                      </>
                    )}
                  </button>
                  
                  {/* 에러 발생 시 버튼 하단에도 메시지 표시 */}
                  {errorMessage && (
                    <p className="text-red-600 text-center font-bold animate-pulse">
                      ※ {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
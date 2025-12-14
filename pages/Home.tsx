import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES, FAQS } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-6 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-base md:text-lg mb-8 animate-fade-in-up uppercase tracking-wider">
            베트남 On-Line의 모든 것
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            베트남 온라인 진출은<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Vietnam On-Line Lab</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
            이커머스, 플랫폼, 콘텐츠, 데이터까지.<br/>
            베트남 온라인에 필요한 모든 것을 <strong>현지 기준</strong>으로 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all text-xl shadow-lg hover:shadow-orange-600/30 flex items-center justify-center gap-2"
            >
              무료 상담 신청 <ArrowRight size={24} />
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium rounded-lg transition-all text-xl flex items-center justify-center"
            >
              맞춤 제안 요청
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Side */}
            <div className="bg-slate-200 p-8 md:p-12 rounded-3xl h-full flex flex-col">
              <div className="min-h-[80px] flex items-center justify-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 leading-tight text-center">
                  기업들이 가장 많이 고민
                </h2>
              </div>
              
              <ul className="space-y-6 flex-1">
                {[
                  "현지 법인을 꼭 만들어야 할까?",
                  "베트남 직원을 채용하지 않으면 운영이 불가능할까?",
                  "현지 배송은 어떻게 처리해야 할까?",
                  "베트남 고객 응대(CS)는 누가, 어떻게 해야 할까?"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-6 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xl font-black">?</span>
                    <p className="text-slate-800 font-bold text-xl leading-snug">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Link to="/contact" className="inline-block w-full text-center py-5 bg-slate-900 text-white font-bold text-xl rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                  무료 진단 받기
                </Link>
              </div>
            </div>
            
            {/* Solution Side */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="min-h-[80px] flex items-center justify-center mb-10">
                  <h3 className="text-3xl font-bold leading-tight text-center">
                    <span className="text-orange-400">Vietnam On-Line Lab</span>의 명쾌한 해답
                  </h3>
                </div>

                <div className="space-y-8 flex-1">
                  <div className="flex gap-5">
                    <div className="w-1.5 bg-orange-500 rounded-full shrink-0 h-auto self-stretch my-1"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-200 mb-2">현지 법인 없이도</h4>
                      <p className="text-slate-300 text-xl font-medium leading-relaxed">로컬 계정을 활용해 베트남 온라인 샵 운영 가능</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-1.5 bg-orange-500 rounded-full shrink-0 h-auto self-stretch my-1"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-200 mb-2">현지 직원 채용 없이도</h4>
                      <p className="text-slate-300 text-xl font-medium leading-relaxed">Vietnam On-Line Lab이 현지 운영을 직접 수행</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-1.5 bg-orange-500 rounded-full shrink-0 h-auto self-stretch my-1"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-200 mb-2">배송은 간단하게</h4>
                      <p className="text-slate-300 text-xl font-medium leading-relaxed">상품은 한국의 Vietnam On-Line Lab으로 발송하면 끝</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-1.5 bg-orange-500 rounded-full shrink-0 h-auto self-stretch my-1"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-200 mb-2">향후 베트남 법인 설립 시</h4>
                      <p className="text-slate-300 text-xl font-medium leading-relaxed">기존 운영 계정 양도·양수 가능</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Link to="/contact" className="inline-block w-full text-center py-5 bg-white text-slate-900 font-bold text-xl rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
                    무료 진단 받기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">핵심 서비스</h2>
            <p className="text-slate-600 text-xl">온라인 시장 진출에 필요한 핵심 영역을 지원합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} featured={idx === 0} />
            ))}
          </div>

          <div className="text-center">
             <Link to="/services" className="inline-flex items-center px-8 py-4 border border-slate-300 rounded-lg text-slate-700 font-bold text-lg hover:border-orange-500 hover:text-orange-600 transition-colors bg-white shadow-sm">
               서비스 전체 보기 (운영 대행 · 플랫폼 · 리서치) <ArrowRight size={20} className="ml-2"/>
             </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">진행 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             {[
               {step: "01", title: "상담 및 진단", desc: "비즈니스 현황 파악"},
               {step: "02", title: "전략 설계", desc: "베트남 온라인 맞춤 플랜"},
               {step: "03", title: "실험 및 실행", desc: "현지 팀 운영 및 테스트"},
               {step: "04", title: "데이터 & 개선", desc: "리포트 기반 성과 최적화"}
             ].map((item, idx) => (
               <div key={idx} className="relative p-10 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-200 transition-colors hover:shadow-lg">
                 <div className="text-7xl font-black text-slate-100 absolute top-4 right-6 group-hover:text-orange-50 transition-colors">{item.step}</div>
                 <div className="relative z-10 pt-4">
                   <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-lg text-slate-600 leading-snug">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-5">자주 묻는 질문</h2>
            <p className="text-slate-600 text-xl">궁금하신 점을 미리 확인하세요.</p>
          </div>
          
          <div className="space-y-6">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:border-orange-200 transition-colors">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-start gap-4">
                  <span className="text-orange-500 mt-1">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-9 leading-relaxed text-xl">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/faq" className="text-slate-500 hover:text-orange-600 font-medium text-lg border-b border-transparent hover:border-orange-600 transition-colors">
              FAQ 전체보기
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            지금 바로 베트남 온라인 시장을 선점하세요
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed">
            망설이는 순간 경쟁사는 이미 시작하고 있습니다. <br/>
            가장 빠르고 효율적인 온라인 파트너가 되어드리겠습니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-14 py-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all text-2xl shadow-xl hover:shadow-orange-600/30"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 z-40 shadow-xl safe-area-bottom">
        <Link 
          to="/contact" 
          className="block w-full py-4 bg-orange-600 text-white font-bold text-center text-xl rounded-xl shadow-md"
        >
          무료 상담 신청
        </Link>
      </div>
    </div>
  );
};

export default Home;
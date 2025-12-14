import React from 'react';
import { SERVICES, PACKAGES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const growthServices = SERVICES.filter(s => s.category === 'growth');
  const operationServices = SERVICES.filter(s => s.category === 'operation');
  const strategyServices = SERVICES.filter(s => s.category === 'strategy');

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">베트남 온라인 서비스</h1>
          <p className="text-xl text-slate-600">
            베트남 온라인 비즈니스에 필요한 모든 퍼즐 조각을 맞춰드립니다.<br/>
            리서치부터 운영까지, 귀사의 단계에 맞는 최적의 솔루션을 선택하세요.
          </p>
        </div>

        {/* Growth Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 border-l-4 border-orange-500 pl-5">
            Growth (마케팅 & 트래픽)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Operation Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 border-l-4 border-blue-600 pl-5">
            Operation (판매 & 운영)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operationServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Strategy Section */}
        <div className="mb-28">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 border-l-4 border-emerald-500 pl-5">
            Strategy (전략 & 조사)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-24" id="packages">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">추천 패키지</h2>
            <p className="text-slate-600 mt-3 text-lg">단계별로 가장 효과적인 구성을 제안합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`relative flex flex-col p-8 rounded-2xl border ${pkg.recommended ? 'bg-white border-orange-500 shadow-2xl scale-105 z-10' : 'bg-white border-slate-200 text-slate-700'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                    Best Choice
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{pkg.name}</h3>
                <p className="text-base text-slate-500 mb-8">{pkg.target}</p>
                <div className="flex-grow space-y-5 mb-10">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check size={20} className={`mt-0.5 shrink-0 ${pkg.recommended ? 'text-orange-500' : 'text-slate-400'}`} />
                      <span className="text-base font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className={`block w-full py-4 rounded-lg text-center font-bold text-lg transition-colors ${pkg.recommended ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  견적 문의하기
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-base text-slate-500 mt-10">※ 모든 패키지는 베트남 온라인 기준 맞춤 설계됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
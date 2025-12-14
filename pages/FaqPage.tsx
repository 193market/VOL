import React from 'react';
import { FAQS } from '../constants';
import { Link } from 'react-router-dom';

const FaqPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-6">자주 묻는 질문</h1>
          <p className="text-xl text-slate-600">
            베트남 온라인 시장, 궁금한 점을 해결해드립니다.
          </p>
        </div>

        <div className="space-y-8">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-10 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex gap-4">
                <span className="text-orange-500 font-black">Q.</span>
                {faq.question}
              </h3>
              <div className="pl-9 border-l-2 border-slate-100">
                 <p className="text-slate-600 leading-relaxed text-xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 bg-slate-200 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">원하는 답변을 찾지 못하셨나요?</h3>
          <p className="text-slate-600 mb-10 text-lg">담당자가 직접 상황에 맞는 답변을 드립니다.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-slate-900 text-white font-bold text-lg rounded-lg hover:bg-slate-800 transition-colors">
            1:1 문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
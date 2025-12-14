import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 border-b pb-6">이용약관</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="font-bold text-lg mb-4">Vietnam On-Line Lab</p>
          <p className="mb-8">
            본 약관은 Vietnam On-Line Lab(이하 “회사”)이 제공하는 모든 서비스의 이용과 관련하여
            회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제1조 (목적)</h2>
          <p className="mb-8">
            본 약관은 회사가 제공하는 베트남 온라인 시장 관련 컨설팅, 마케팅, 운영, 리서치 등의
            서비스 이용 조건 및 절차를 규정합니다.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제2조 (서비스의 내용)</h2>
          <p className="mb-2">회사가 제공하는 서비스는 다음을 포함합니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>베트남 온라인 시장 분석 및 컨설팅</li>
            <li>온라인 마케팅(KOL/KOC, 리뷰, 콘텐츠 운영)</li>
            <li>이커머스 및 온라인 플랫폼 운영 지원</li>
            <li>베트남 소비자 리서치 및 데이터 분석</li>
            <li>기타 회사가 정하는 관련 서비스</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제3조 (서비스 이용)</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>서비스 이용은 상담 및 협의를 통해 확정됩니다.</li>
            <li>서비스 범위, 비용, 기간은 개별 계약 또는 제안서를 기준으로 합니다.</li>
            <li>회사는 불법적이거나 법령에 위반되는 서비스 요청을 거부할 수 있습니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제4조 (이용자의 의무)</h2>
          <p className="mb-2">이용자는 다음 사항을 준수해야 합니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>제공 정보의 정확성 유지</li>
            <li>불법·위법 상품 또는 서비스 요청 금지</li>
            <li>회사 및 제3자의 지식재산권 침해 금지</li>
            <li>서비스 운영에 필요한 협조 제공</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제5조 (지식재산권)</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>회사가 제공한 모든 자료, 리포트, 콘텐츠의 저작권은 회사에 귀속됩니다.</li>
            <li>사전 동의 없이 무단 복제, 배포, 재가공을 금지합니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제6조 (책임의 제한)</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>회사는 이용자의 매출, 수익에 대해 <strong>절대적인 성과를 보장하지 않습니다.</strong></li>
            <li>외부 플랫폼 정책 변경, 시장 상황, 소비자 반응 등에 따른 결과에 대해서는 책임을 지지 않습니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제7조 (계약 해지 및 제한)</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>계약 해지는 상호 협의를 원칙으로 합니다.</li>
            <li>이용자가 약관을 위반할 경우 회사는 서비스 제공을 중단할 수 있습니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제8조 (분쟁 해결 및 관할)</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>본 약관과 관련된 분쟁은 상호 협의를 통해 해결합니다.</li>
            <li>협의가 이루어지지 않을 경우 <strong>대한민국 법을 준거법</strong>으로 하며, 관할 법원은 회사 본점 소재지를 따릅니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">제9조 (약관의 변경)</h2>
          <p className="mb-2">회사는 관련 법령을 준수하는 범위 내에서 본 약관을 변경할 수 있으며, 변경 시 홈페이지를 통해 공지합니다.</p>
          <p className="font-medium text-slate-900">시행일: 2025.12.13</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
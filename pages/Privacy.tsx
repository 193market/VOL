import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 border-b pb-6">개인정보처리방침</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="font-bold text-lg mb-4">Vietnam On-Line Lab</p>
          <p className="mb-8">
            Vietnam On-Line Lab(이하 “회사”)은 개인정보보호법 등 관련 법령을 준수하며,
            이용자의 개인정보를 중요하게 생각하고 보호하기 위해 다음과 같은 개인정보처리방침을 수립·공개합니다.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. 개인정보의 수집 항목 및 방법</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">① 수집 항목</h3>
          <p className="mb-2">회사는 서비스 제공 및 상담을 위해 아래의 개인정보를 수집할 수 있습니다.</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>필수 항목:</strong> 회사명 또는 브랜드명, 담당자명, 연락처(전화번호), 이메일 주소</li>
            <li><strong>선택 항목:</strong> 관심 서비스 분야, 베트남 온라인/이커머스 진출 여부, 월 예산 범위, 문의 내용</li>
            <li><strong>자동 수집 항목:</strong> 접속 IP, 쿠키, 접속 로그, 브라우저 정보, 기기 정보</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">② 수집 방법</h3>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>홈페이지 문의하기 및 상담 신청 폼</li>
            <li>이메일, 메신저, 전화 상담 과정</li>
            <li>웹사이트 이용 과정에서 자동 수집</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. 개인정보의 수집 및 이용 목적</h2>
          <p className="mb-2">회사는 수집한 개인정보를 다음의 목적에 한하여 이용합니다.</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>상담 요청에 대한 응답 및 커뮤니케이션</li>
            <li>베트남 온라인 시장 관련 서비스 제안 및 견적 안내</li>
            <li>서비스 제공 및 계약 이행</li>
            <li>고객 문의 및 불만 처리</li>
            <li>서비스 개선을 위한 통계 및 분석</li>
            <li>법령 및 내부 정책에 따른 기록 보관</li>
          </ul>
          <p className="mb-8 text-orange-600 font-medium">※ 수집한 개인정보는 마케팅 목적의 무단 활용이나 제3자 제공을 하지 않습니다.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
          <p className="mb-2">회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li><strong>상담 및 문의 정보:</strong> 상담 종료 후 1년</li>
            <li><strong>계약 관련 정보:</strong> 관계 법령에 따른 보관 기간</li>
            <li><strong>법령에 의해 보관이 필요한 경우:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>계약 또는 청약 철회 기록: 5년</li>
                <li>소비자 불만 및 분쟁 처리 기록: 3년</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. 개인정보의 제3자 제공</h2>
          <p className="mb-2">회사는 이용자의 개인정보를 <strong>원칙적으로 외부에 제공하지 않습니다.</strong> 다만, 다음의 경우에는 예외로 합니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 따라 제공이 요구되는 경우</li>
            <li>서비스 수행을 위해 최소한의 범위 내에서 협력사가 필요한 경우 (이 경우 별도 고지 및 동의를 받습니다)</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. 개인정보 처리의 위탁</h2>
          <p className="mb-2">회사는 원활한 서비스 제공을 위해 개인정보 처리 업무의 일부를 외부에 위탁할 수 있습니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li><strong>위탁 업무 내용:</strong> 웹사이트 운영 및 시스템 관리, 데이터 보관 및 보안 관리</li>
          </ul>
          <p className="mb-8">회사는 위탁 계약 시 개인정보 보호 관련 법령을 준수하도록 관리·감독합니다.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. 개인정보의 파기 절차 및 방법</h2>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li><strong>파기 절차:</strong> 보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 내부 방침에 따라 파기합니다.</li>
            <li><strong>파기 방법:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>전자적 파일: 복구 불가능한 방식으로 삭제</li>
                <li>출력물: 분쇄 또는 소각</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. 이용자의 권리 및 행사 방법</h2>
          <p className="mb-2">이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>개인정보 열람, 수정, 삭제 요청</li>
            <li>개인정보 처리 정지 요청</li>
            <li>수집·이용 동의 철회</li>
          </ul>
          <p className="mb-8">요청은 이메일 또는 문의하기를 통해 가능하며, 회사는 지체 없이 조치합니다.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. 개인정보 보호를 위한 안전 조치</h2>
          <p className="mb-2">회사는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.</p>
          <ul className="list-disc pl-5 mb-8 space-y-1">
            <li>개인정보 접근 권한 최소화</li>
            <li>내부 관리 계획 수립 및 운영</li>
            <li>보안 시스템 및 암호화 적용</li>
            <li>개인정보 취급자 교육</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. 개인정보 보호 책임자</h2>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>책임자:</strong> 이성열</li>
            <li><strong>이메일:</strong> 193market@gmail.com</li>
            <li><strong>문의 방법:</strong> 홈페이지 문의하기</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. 개인정보처리방침의 변경</h2>
          <p className="mb-2">본 개인정보처리방침은 법령 또는 회사 정책 변경에 따라 수정될 수 있으며, 변경 시 홈페이지를 통해 사전 공지합니다.</p>
          <p className="font-medium text-slate-900">시행일: 2025.12.13</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
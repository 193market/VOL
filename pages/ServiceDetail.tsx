import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, MessageCircle, BarChart, Target, Zap, Phone, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  // Generate content based on ID
  const getContent = (id: string) => {
    switch(id) {
      case 'online-review':
        return {
          subtitle: "신뢰도를 높이고 구매 전환율을 극대화하는",
          points: [
            "현지인 체험단 100% 실사용 리뷰",
            "페이스북/틱톡/쇼피 등 채널별 최적화",
            "단순 배포가 아닌 '구매 유도형' 콘텐츠 기획",
            "악성 리뷰 관리 및 평점 최적화 솔루션"
          ],
          process: ["타겟 분석", "체험단 모집", "가이드라인 배포", "리뷰 작성 및 검수", "결과 리포트"],
          desc: "베트남 소비자는 브랜드의 일방적인 광고보다 실제 사용자의 후기를 더 신뢰합니다. Vietnam On-Line Lab은 단순한 리뷰 생성을 넘어, 우리 브랜드에 꼭 맞는 타겟 고객층을 섭외하여 진정성 있는 후기를 만들어냅니다."
        };
      case 'kol-koc':
        return {
          subtitle: "강력한 파급력으로 브랜드를 알리는",
          points: [
            "마이크로 인플루언서(KOC) 대량 확산",
            "메가 인플루언서(KOL) 브랜딩 및 라이브 커머스",
            "실제 도달률 및 참여도(Engagement) 기반 섭외",
            "2차 마케팅 활용 가능한 고퀄리티 콘텐츠 확보"
          ],
          process: ["인플루언서 리스트업", "섭외 및 계약", "콘텐츠 기획", "업로드 및 확산", "성과 분석"],
          desc: "베트남은 인플루언서 마케팅의 효율이 가장 높은 국가 중 하나입니다. 허수 팔로워가 아닌 실제 구매 영향력을 가진 KOL/KOC를 데이터 기반으로 선정하여, 최소 비용으로 최대의 확산 효과를 만들어냅니다."
        };
      case 'channel-community':
        return {
          subtitle: "충성 고객을 모으고 팬덤을 만드는",
          points: [
            "브랜드 공식 SNS (Facebook, TikTok, Instagram) 운영",
            "베트남 현지 커뮤니티 바이럴 및 여론 조성",
            "24시간 고객 응대(CS) 및 댓글 관리",
            "이벤트 기획 및 팔로워 증대 캠페인"
          ],
          process: ["채널 진단", "톤앤매너 설정", "콘텐츠 캘린더 수립", "정기 포스팅 & 소통", "팬덤 관리"],
          desc: "일방적인 정보 전달은 통하지 않습니다. 베트남 현지 정서에 맞는 '소통'이 필요합니다. 현지 운영팀이 귀사의 목소리가 되어 고객과 실시간으로 소통하고, 브랜드의 팬덤을 구축해 드립니다."
        };
      case 'sales-agency':
        return {
          subtitle: "복잡한 운영 없이 매출만 확인하는",
          points: [
            "상품 등록, 번역, 상세페이지 현지화",
            "주문 처리, 배송 관리, 정산 대행",
            "시즌별/월별 프로모션 기획 및 실행",
            "재고 관리 및 CS 통합 운영"
          ],
          process: ["시장성 검토", "판매 전략 수립", "입점 및 세팅", "운영 및 프로모션", "정산 및 보고"],
          desc: "언어 장벽, 결제 시스템, 물류 이슈로 고민하지 마세요. Vietnam On-Line Lab이 귀사의 베트남 온라인 지사가 되어 판매에 필요한 모든 운영 업무를 전문적으로 대행해 드립니다."
        };
      case 'platform-operation':
        return {
          subtitle: "플랫폼별 특성에 딱 맞춘",
          points: [
            "Shopee, Lazada: 검색 최적화(SEO) 및 샵 꾸미기",
            "TikTok Shop: 숏폼 영상 연계 및 라이브 방송",
            "Facebook Shop: 메신저 연동 및 타겟 광고",
            "플랫폼 공식 캠페인(Mega Sale) 참여 전략"
          ],
          process: ["채널 개설", "플랫폼 최적화", "트래픽 유입", "전환 유도", "CRM 마케팅"],
          desc: "베트남의 주요 이커머스 플랫폼은 저마다의 공략법이 다릅니다. 각 플랫폼 알고리즘에 맞춘 최적화된 운영 전략으로 상위 노출을 유도하고 매출을 견인합니다."
        };
      case 'survey':
        return {
          subtitle: "데이터로 실패 확률을 줄이는",
          points: [
            "타겟 소비자 대상 설문조사 (FGI, 온라인 서베이)",
            "경쟁사 제품 가격, 성분, 마케팅 분석",
            "베트남 시장 진입 적합성 테스트",
            "인사이트 도출 및 액션 플랜 제안"
          ],
          process: ["설문 설계", "패널 모집", "설문 진행", "데이터 분석", "전략 리포트"],
          desc: "감에 의존한 진출은 위험합니다. 베트남 현지 소비자의 목소리를 직접 들어보세요. 객관적인 데이터와 심층적인 분석을 통해 시장 진입의 성공 확률을 획기적으로 높여드립니다."
        };
      default:
        return {
          subtitle: "베트남 온라인 비즈니스 성공 파트너",
          points: ["맞춤형 전략 수립", "현지 전담팀 운영", "데이터 기반 의사결정", "통합 리포트 제공"],
          process: ["상담", "기획", "실행", "보고", "개선"],
          desc: "귀사의 비즈니스 목표 달성을 위해 최선을 다하겠습니다."
        };
    }
  };

  const content = getContent(service.id);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-xl font-medium">
            <ArrowLeft size={24} className="mr-2" /> 서비스 목록으로 돌아가기
          </Link>
          <div className="flex items-start gap-6">
            <div className="hidden md:flex w-24 h-24 bg-orange-600 rounded-2xl items-center justify-center shrink-0 shadow-lg">
              <Icon size={48} className="text-white" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block text-orange-400 font-bold text-xl mb-3 tracking-wide">{service.category.toUpperCase()} SOLUTION</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{service.title}</h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
                {content.subtitle} <br className="hidden md:block"/>
                <span className="text-white font-medium">전문 솔루션을 제공합니다.</span>
              </p>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
             <path fill="#F97316" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.1,21.9,70.9,33.1C59.7,44.3,48.7,53.6,36.5,61.7C24.3,69.8,10.9,76.7,-1.5,79.3C-13.9,81.9,-25.6,80.2,-37.7,74.5C-49.8,68.8,-62.3,59.1,-71.4,47.1C-80.5,35.1,-86.2,20.8,-84.9,7.1C-83.6,-6.6,-75.3,-19.7,-65.4,-30.9C-55.5,-42.1,-44,-51.4,-31.8,-59.5C-19.6,-67.6,-6.7,-74.5,7.3,-87.2L8.5,-99.8L8.5,0L0,0Z" transform="translate(100 100)" />
           </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Target className="text-orange-500" size={32} />
                서비스 개요
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed whitespace-pre-line">
                {content.desc}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Zap className="text-orange-500" size={32} />
                핵심 포인트
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={28} />
                    <span className="text-lg font-bold text-slate-800 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                  <BarChart className="text-orange-400" size={32} />
                  진행 프로세스
                </h2>
                <div className="space-y-6">
                  {content.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-slate-800 text-orange-500 font-black text-xl flex items-center justify-center border border-slate-700 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                        {idx + 1}
                      </div>
                      <div className="h-0.5 flex-grow bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
                      <div className="text-xl font-bold">{step}</div>
                    </div>
                  ))}
                </div>
               </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-black text-slate-900 mb-4">지금 바로 시작하세요</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  내 브랜드에 맞는<br/>
                  최적의 전략을 제안해드립니다.
                </p>
                
                <Link to="/contact" className="block w-full py-4 bg-orange-600 hover:bg-orange-700 text-white text-center font-bold text-lg rounded-xl transition-all shadow-md mb-4 flex items-center justify-center gap-2">
                  무료 견적 요청 <ArrowRight size={20} />
                </Link>
                
                <div className="text-center text-slate-500 text-base">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone size={18} /> 010-7320-5565
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle size={18} /> 카카오톡: infovina
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">다른 서비스 보기</h4>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== id).slice(0, 4).map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="block p-3 bg-white rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors font-medium text-slate-700 border border-slate-200 hover:border-orange-200 text-base">
                      {s.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/services" className="text-slate-500 hover:text-slate-800 text-base font-bold border-b border-slate-300 pb-0.5">
                    전체 서비스 목록
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
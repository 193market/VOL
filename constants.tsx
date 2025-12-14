import { 
  Users, 
  Megaphone, 
  ShoppingBag, 
  Store, 
  ClipboardCheck, 
  BarChart3,
  Search,
  MessageCircle,
  Globe
} from 'lucide-react';
import { ServiceItem, FaqItem, PackageItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'online-review',
    title: '온라인 리뷰 & 체험단',
    description: '베트남 소비자 기반 체험단 구성, 리뷰 품질 및 신뢰도 관리, 구매 전환 중심 설계',
    icon: MessageCircle,
    category: 'growth'
  },
  {
    id: 'kol-koc',
    title: 'KOL / KOC 마케팅',
    description: '베트남 현지 영향력 기반 인플루언서 운영, 콘텐츠 기획 및 확산, 실제 반응 데이터 분석',
    icon: Megaphone,
    category: 'growth'
  },
  {
    id: 'channel-community',
    title: '채널 & 커뮤니티 관리',
    description: '팔로워/구독자 성장 전략, 댓글·문의·반응 관리 및 재구매 구조 설계',
    icon: Users,
    category: 'growth'
  },
  {
    id: 'sales-agency',
    title: '온라인 판매 & 운영 대행',
    description: '플랫폼별 운영 전략 수립, 상품·콘텐츠·프로모션 관리 (운영 범위 협의 가능)',
    icon: ShoppingBag,
    category: 'operation'
  },
  {
    id: 'platform-operation',
    title: '현지 온라인 플랫폼 운영',
    description: 'Shopee, TikTok Shop, Lazada 등 베트남 주요 플랫폼 특성별 최적화 운영',
    icon: Globe,
    category: 'operation'
  },
  {
    id: 'survey',
    title: '베트남 소비자 리서치',
    description: '가격·선호·구매 의사 조사, 데이터 리포트 제공 및 시장 진입 전략 도출',
    icon: BarChart3,
    category: 'strategy'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    name: 'Research',
    target: '시장·소비자 조사 중심',
    features: ['베트남 소비자 설문조사', '경쟁사 및 시장 분석', '진입 전략 리포트'],
    recommended: false
  },
  {
    name: 'Growth',
    target: '마케팅 + 채널 운영',
    features: ['리뷰 체험단 운영', 'KOL/KOC 콘텐츠 마케팅', 'SNS/커뮤니티 관리', '성과 분석 리포트'],
    recommended: true
  },
  {
    name: 'Scale',
    target: '온라인 운영 대행 + 데이터',
    features: ['멀티 플랫폼 운영 대행', '통합 판매 전략 수립', '정기 프로모션 기획', '상세 데이터 분석'],
    recommended: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "베트남만 가능한가요?",
    answer: "네. Vietnam On-Line Lab은 베트남 온라인 시장에만 집중합니다. 현지 플랫폼과 소비자 행동을 깊이 이해하기 위한 전략입니다."
  },
  {
    question: "특정 플랫폼에만 국한되나요?",
    answer: "아니요. 특정 플랫폼에 종속되지 않고 베트남 내 모든 주요 온라인 플랫폼(Shopee, TikTok Shop, Lazada 등)을 종합적으로 운영합니다."
  },
  {
    question: "최소 예산과 진행 기간은 어떻게 되나요?",
    answer: "베트남 온라인 시장은 업종과 목표에 따라 접근 방식이 다릅니다. 상담을 통해 현실적인 예산과 일정을 안내드립니다."
  },
  {
    question: "KOL / KOC는 어떻게 선정하나요?",
    answer: "베트남 현지에서 실제 영향력과 반응 데이터를 기준으로 선정합니다. 단순 노출이 아닌, 실질적인 효과를 우선합니다."
  },
  {
    question: "운영 대행 범위는 어디까지인가요?",
    answer: "불법적인 제품이나 서비스는 진행하지 않습니다. 운영 난이도가 높은 경우 사전 상담을 통해 범위를 협의합니다."
  },
  {
    question: "리포트는 어떤 형태로 제공되나요?",
    answer: "모든 결과는 엑셀 기반 데이터 리포트로 제공되며, 베트남 온라인 운영 전반을 수치로 확인하실 수 있습니다."
  }
];

export const NAV_ITEMS = [
  { label: '홈', path: '/' },
  { label: '베트남 온라인 서비스', path: '/services' },
  { label: 'FAQ', path: '/faq' },
  { label: '문의하기', path: '/contact' },
];
import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 text-white">
              <Logo className="h-16 w-auto" isDarkText={false} />
            </Link>
            <div className="space-y-3 text-base text-slate-500 font-medium leading-relaxed">
              <p>현지 법인을 꼭 만들어야 할까?</p>
              <p>베트남 직원을 채용하지 않으면 운영이 불가능할까?</p>
              <p>현지 배송은 어떻게 처리해야 할까?</p>
              <p>베트남 고객 응대(CS)는 누가, 어떻게 해야 할까?</p>
              <p className="pt-3 text-2xl font-black text-orange-500">모두 가능합니다.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-base tracking-wider">Menu</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">베트남 온라인 서비스</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">진행 방식 및 패키지</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">자주 묻는 질문</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">견적 문의</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 uppercase text-base tracking-wider">Contact Us</h3>
            <div className="flex flex-col gap-5 text-base">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-orange-500 shrink-0" />
                <span>010-7320-5565 (KR) / +84-93-219-4041 (VN)</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-orange-500 shrink-0" />
                <span>193market@gmail.com</span>
              </div>
              <a 
                href="http://pf.kakao.com/_YfxiUn/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-orange-400 transition-colors"
              >
                <MessageCircle size={20} className="text-orange-500 shrink-0" />
                <span>KakaoTalk: @infovina</span>
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-600">
              <p>평일 09:00 - 18:00 (한국시간 기준) / 주말 및 공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Vietnam On-Line Lab. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-400">개인정보처리방침</Link>
            <Link to="/terms" className="hover:text-slate-400">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
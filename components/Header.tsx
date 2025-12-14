import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-slate-900 py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <Logo className="h-12 w-auto" isDarkText={scrolled} />
          </Link>
          
          {/* Divider and Subtitle */}
          <div className="hidden lg:flex items-center h-8 border-l-2 border-slate-700/30 pl-5">
             <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
              베트남 이커머스 연구소
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                location.pathname === item.path 
                  ? 'text-orange-500 font-bold' 
                  : scrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            무료 상담 신청
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-6 space-y-6">
            <div className="pb-4 border-b border-gray-100">
               <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-2">Vietnam On-Line Lab</span>
               <span className="text-xl font-black text-slate-900">베트남 이커머스 연구소</span>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl font-medium px-4 py-3 rounded-lg hover:bg-gray-50 ${
                   location.pathname === item.path ? 'text-orange-600 bg-orange-50' : 'text-slate-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="w-full text-center px-4 py-4 bg-orange-600 text-white text-xl font-bold rounded-lg"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
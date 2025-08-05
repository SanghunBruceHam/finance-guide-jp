import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-finance-green">日本の金融ガイド</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-finance-green font-medium px-3 py-2 rounded-md text-sm"
              >
                ホーム
              </button>
              
              {/* Investment Methods Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors flex items-center">
                  投資方法ガイド
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/stocks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">株式投資</Link>
                    <Link href="/bonds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">債券投資</Link>
                    <Link href="/real-estate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">不動産投資</Link>
                    <Link href="/bank-deposits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">銀行預金</Link>
                    <Link href="/nisa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">NISA活用法</Link>
                    <Link href="/international" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">海外投資</Link>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('comparison')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                投資比較分析
              </button>
              <button 
                onClick={() => scrollToSection('trends')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                最新トレンド
              </button>
              
              {/* Tools Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors flex items-center">
                  投資ツール
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button onClick={() => scrollToSection('calculator')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">投資計算機</button>
                    <button onClick={() => scrollToSection('risk-analyzer')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">リスク分析</button>
                    <button onClick={() => scrollToSection('portfolio-builder')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-finance-green">ポートフォリオ作成</button>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                教育資料
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-finance-green p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-finance-green font-medium block px-3 py-2 rounded-md text-base w-full text-left"
            >
              ホーム
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-gray-600 hover:text-finance-green block px-3 py-2 rounded-md text-base w-full text-left"
            >
              投資比較
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-gray-600 hover:text-finance-green block px-3 py-2 rounded-md text-base w-full text-left"
            >
              投資計算機
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="text-gray-600 hover:text-finance-green block px-3 py-2 rounded-md text-base w-full text-left"
            >
              金融ニュース
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-finance-green block px-3 py-2 rounded-md text-base w-full text-left"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

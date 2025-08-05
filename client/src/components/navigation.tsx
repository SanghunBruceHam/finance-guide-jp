import { useState } from "react";
import { Menu, X } from "lucide-react";

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
              <button 
                onClick={() => scrollToSection('comparison')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                投資比較
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                投資計算機
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                金融ニュース
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-finance-green px-3 py-2 rounded-md text-sm transition-colors"
              >
                FAQ
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

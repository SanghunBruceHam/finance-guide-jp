import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import InvestmentComparison from "@/components/investment-comparison";
import InvestmentCalculator from "@/components/investment-calculator";
import NewsSection from "@/components/news-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import AdSenseBanner from "@/components/adsense-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AdSenseBanner />
      
      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">金融勉強を始めよう</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              投資は資産を増やすための強力な手段です。日本ではNISAや株、債券、不動産、銀行預金など多様な選択肢があります。
              このサイトでは、初心者でも理解しやすいように各投資方法の特徴と始め方を詳しく解説します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-white rounded-lg border border-emerald-100">
              <div className="w-12 h-12 bg-finance-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">株投資</h3>
              <p className="text-sm text-gray-600">高リターンが期待できる成長投資</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
              <div className="w-12 h-12 bg-finance-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">債券</h3>
              <p className="text-sm text-gray-600">安定した固定収入を提供</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-amber-50 to-white rounded-lg border border-amber-100">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">不動産</h3>
              <p className="text-sm text-gray-600">家賃収入と資産価値の上昇</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">銀行預金</h3>
              <p className="text-sm text-gray-600">元本保証の安全な資産管理</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              情報の信頼性は
              <a href="https://www.fsa.go.jp" className="text-finance-green hover:underline" target="_blank" rel="noopener">
                金融庁
              </a>
              の公式情報に基づいています
            </p>
          </div>
        </div>
      </section>

      <InvestmentComparison />
      <AdSenseBanner />
      <InvestmentCalculator />
      <NewsSection />
      <FAQSection />
      <AdSenseBanner />
      <Footer />
    </div>
  );
}

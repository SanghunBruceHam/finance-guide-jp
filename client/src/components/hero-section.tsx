export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="bg-gradient-to-r from-finance-green to-emerald-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">日本の金融ガイド</h1>
          <p className="text-xl lg:text-2xl mb-8 text-emerald-100">
            投資初心者向け！株、債券、不動産、預金の特徴をわかりやすく解説
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            2025年最新のNISA制度や投資トレンドを含めた完全ガイド
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('comparison')}
              className="bg-white text-finance-green px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              投資比較を見る
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-finance-green transition-colors"
            >
              投資計算機を使う
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

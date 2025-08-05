export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-finance-green mb-4">日本の金融ガイド</h3>
            <p className="text-gray-300 mb-4">
              投資初心者向けの信頼できる金融情報を提供します。NISA、株式、債券、不動産投資について、わかりやすく解説しています。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/youraccount" 
                className="text-gray-400 hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">投資カテゴリ</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#comparison" className="hover:text-white transition-colors">株投資</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">債券</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">不動産</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">銀行預金</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サイト情報</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#calculator" className="hover:text-white transition-colors">投資計算機</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">金融ニュース</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/privacy.html" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 日本の金融ガイド. All rights reserved. | 
            <a 
              href="https://www.fsa.go.jp" 
              className="text-finance-green hover:underline ml-1" 
              target="_blank" 
              rel="noopener"
            >
              金融庁
            </a>
            | 投資に関する情報は参考程度にご利用ください
          </p>
        </div>
      </div>
    </footer>
  );
}

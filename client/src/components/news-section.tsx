import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      title: "新NISA制度の活用法完全ガイド",
      excerpt: "2024年から始まった新NISA制度の1年後の運用実績と、2025年の最適な活用戦略を解説します。つみたて投資枠と成長投資枠の使い分けのコツも紹介。",
      date: "2025年1月15日",
      category: "新NISA",
      categoryColor: "bg-finance-green text-white"
    },
    {
      id: 2,
      title: "日銀金利政策と投資への影響",
      excerpt: "日本銀行の金利政策変更が個人投資家に与える影響について詳しく分析。債券投資や住宅ローン、預金金利への影響も解説します。",
      date: "2025年1月12日",
      category: "金利動向",
      categoryColor: "bg-finance-blue text-white"
    },
    {
      id: 3,
      title: "2025年注目の海外ETF銘柄",
      excerpt: "円安環境下での海外ETF投資のメリットと、2025年に注目すべき米国・欧州・新興国ETFを厳選して紹介します。",
      date: "2025年1月10日",
      category: "海外投資",
      categoryColor: "bg-purple-500 text-white"
    }
  ];

  return (
    <section id="news" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">2025年金融ニュース</h2>
          <p className="text-lg text-gray-600">最新の投資トレンドと制度変更情報</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                  <p className="text-sm">Financial News Image</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className={article.categoryColor}>
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500 ml-3">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <a href="#" className="text-finance-green text-sm font-medium hover:underline">
                  続きを読む →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

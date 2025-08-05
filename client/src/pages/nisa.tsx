import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, Shield, AlertTriangle, CheckCircle, XCircle, Target, BookOpen } from "lucide-react";

export default function NISAPage() {
  const nisaComparison = [
    {
      type: "つみたて投資枠",
      annualLimit: "120万円",
      totalLimit: "1,800万円",
      features: ["長期・積立・分散投資", "金融庁認定商品のみ", "20年以上の運用実績"],
      products: ["インデックス投資信託", "アクティブ投資信託（一部）", "ETF（一部）"],
      bestFor: "投資初心者・コツコツ派",
      color: "bg-finance-green"
    },
    {
      type: "成長投資枠",
      annualLimit: "240万円", 
      totalLimit: "1,200万円",
      features: ["個別株投資可能", "一括投資可能", "商品選択の自由度高"],
      products: ["上場株式", "投資信託", "ETF", "REIT"],
      bestFor: "投資経験者・積極派",
      color: "bg-finance-blue"
    }
  ];

  const timelineData = [
    { year: "2014", event: "NISA開始", description: "年間100万円、5年間の非課税制度としてスタート" },
    { year: "2018", event: "つみたてNISA開始", description: "年間40万円、20年間の積立専用制度を新設" },
    { year: "2024", event: "新NISA制度開始", description: "2つの投資枠を統合、非課税期間無期限化、投資枠大幅拡大" },
    { year: "2025", event: "制度定着", description: "個人投資家の利用率が大幅向上、投資人口拡大に貢献" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-finance-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">新NISA完全活用ガイド</h1>
            <p className="text-xl text-emerald-100 mb-8">
              2024年開始の新NISA制度を最大限活用して、効率的な資産形成を実現
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-white text-finance-green hover:bg-gray-100 px-4 py-2 text-sm">
                非課税期間無期限
              </Badge>
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 text-sm">
                年間360万円まで投資可能
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* NISA制度の基本 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">新NISA制度の特徴</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {nisaComparison.map((nisa, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`${nisa.color} text-white`}>
                <CardTitle className="text-center">{nisa.type}</CardTitle>
                <div className="text-center">
                  <div className="text-2xl font-bold">年間 {nisa.annualLimit}</div>
                  <div className="text-sm opacity-90">生涯投資枠: {nisa.totalLimit}</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-finance-green" />
                      主な特徴
                    </h4>
                    <ul className="text-sm space-y-1">
                      {nisa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">対象商品</h4>
                    <div className="flex flex-wrap gap-2">
                      {nisa.products.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">おすすめの人: </span>
                    <span className="text-sm text-gray-600">{nisa.bestFor}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* NISA活用戦略 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">投資目標別NISA活用戦略</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-finance-green">初心者・安定派</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-finance-green">つみたて投資枠中心</div>
                  <div className="text-sm text-gray-600">月3-5万円の積立投資</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">国内株式インデックス</span>
                    <Badge variant="outline">40%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">先進国株式インデックス</span>
                    <Badge variant="outline">40%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">新興国株式インデックス</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <Shield className="w-4 h-4 inline mr-1" />
                    リスクを抑えて長期的な資産形成を目指す
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center text-finance-blue">バランス派</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-finance-blue">両枠併用</div>
                  <div className="text-sm text-gray-600">つみたて + 個別株投資</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">つみたて投資信託</span>
                    <Badge variant="outline">60%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">高配当株</span>
                    <Badge variant="outline">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">成長株</span>
                    <Badge variant="outline">15%</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    安定性と成長性のバランスを重視
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center text-red-600">積極派</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-red-600">成長投資枠中心</div>
                  <div className="text-sm text-gray-600">個別株・テーマ投資</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">成長株（個別）</span>
                    <Badge variant="outline">50%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">テーマ型ETF</span>
                    <Badge variant="outline">30%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">海外株式</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    高リターンを狙うが、リスク管理も重要
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NISA制度の歴史と発展 */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NISA制度の歴史と今後</h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-finance-green"></div>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-finance-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-finance-green text-white mr-3">{item.year}</Badge>
                      <h3 className="text-lg font-semibold">{item.event}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NISA節税効果計算 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NISA節税効果シミュレーション</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-finance-green" />
                  20年間の節税効果例
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">投資条件</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• つみたて投資枠: 月10万円 × 20年</li>
                      <li>• 年率リターン: 5%</li>
                      <li>• 総投資額: 2,400万円</li>
                      <li>• 運用結果: 4,110万円</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>運用益</span>
                      <span className="font-bold text-lg">1,710万円</span>
                    </div>
                    <div className="flex justify-between items-center text-red-600">
                      <span>課税額（20.315%）</span>
                      <span className="font-bold">347万円</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center text-finance-green">
                        <span className="font-semibold">NISA節税効果</span>
                        <span className="font-bold text-xl">347万円</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>よくある質問</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Q: 旧NISAから新NISAへの移管は？</h4>
                    <p className="text-sm text-gray-600">A: 自動的に移管されず、新たに投資枠を使用する必要があります</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Q: 両方の投資枠を同時利用可能？</h4>
                    <p className="text-sm text-gray-600">A: はい。つみたて投資枠120万円 + 成長投資枠240万円を併用できます</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Q: 売却後の投資枠再利用は？</h4>
                    <p className="text-sm text-gray-600">A: 売却した分の投資枠は翌年に復活し、再利用できます</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Q: 損益通算はできる？</h4>
                    <p className="text-sm text-gray-600">A: NISA口座内の損失は、特定口座等と損益通算できません</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, TrendingUp, AlertTriangle, DollarSign, BarChart3, Clock, Building, Target } from "lucide-react";

export default function BondsPage() {
  const bondTypes = [
    {
      type: "日本国債",
      description: "日本政府が発行する最も安全な債券",
      minInvestment: "1万円〜",
      yield: "0.7-1.5%",
      risk: "低",
      liquidity: "高",
      features: ["元本保証", "定期利払い", "流動性高", "低リスク"],
      pros: ["政府保証で安全性最高", "いつでも売却可能", "金利上昇で価格上昇期待"],
      cons: ["低利回り", "インフレリスク", "金利下落時は値下がり"],
      color: "bg-green-600"
    },
    {
      type: "社債",
      description: "企業が発行する債券。国債より高利回り",
      minInvestment: "10万円〜",
      yield: "1.0-4.0%",
      risk: "中",
      liquidity: "中",
      features: ["企業信用力に依存", "国債より高利回り", "銘柄選択重要", "信用格付あり"],
      pros: ["国債より高い利回り", "分散投資効果", "満期まで保有すれば元本確定"],
      cons: ["企業の信用リスク", "流動性やや低い", "金利リスクあり"],
      color: "bg-finance-blue"
    },
    {
      type: "外国債券",
      description: "海外政府・企業が発行する債券",
      minInvestment: "1万円〜",
      yield: "2.0-6.0%",
      risk: "中〜高",
      liquidity: "中",
      features: ["為替リスクあり", "高利回り期待", "分散投資効果", "通貨選択多様"],
      pros: ["高い利回り", "通貨分散効果", "海外金利の恩恵"],
      cons: ["為替変動リスク", "カントリーリスク", "情報収集困難"],
      color: "bg-purple-600"
    }
  ];

  const riskFactors = [
    {
      name: "金利リスク",
      description: "金利上昇時に債券価格が下落するリスク",
      impact: "中〜高",
      mitigation: "満期まで保有、短期債券選択、ラダー戦略"
    },
    {
      name: "信用リスク",
      description: "発行体の経営悪化により元利払いが滞るリスク",
      impact: "中〜高",
      mitigation: "格付確認、分散投資、政府保証債券優先"
    },
    {
      name: "流動性リスク",
      description: "売却したい時に適正価格で売却できないリスク",
      impact: "低〜中",
      mitigation: "国債や大型社債選択、長期保有前提"
    },
    {
      name: "インフレリスク",
      description: "物価上昇により実質的な価値が目減りするリスク",
      impact: "中",
      mitigation: "物価連動債券、短期債券、株式併用"
    }
  ];

  const currentMarketTrends = [
    {
      trend: "日銀金利政策の変化",
      impact: "プラス",
      description: "段階的な金利正常化により、国債利回りが上昇傾向。新発債券の魅力向上。",
      recommendation: "新発10年国債への投資タイミングを検討"
    },
    {
      trend: "企業業績の改善",
      impact: "プラス",
      description: "多くの企業で財務状況が改善し、社債の信用リスクが低下。",
      recommendation: "優良企業の社債への投資機会拡大"
    },
    {
      trend: "インフレ懸念の継続",
      impact: "マイナス",
      description: "持続的なインフレにより、固定金利債券の実質価値が目減りする可能性。",
      recommendation: "短期債券や物価連動債券を検討"
    },
    {
      trend: "円安環境の継続",
      impact: "プラス",
      description: "外国債券（為替ヘッジなし）の円換算利回りが向上。",
      recommendation: "外国債券への分散投資を検討"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-finance-blue to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">債券投資完全ガイド</h1>
            <p className="text-xl text-blue-100 mb-8">
              安定性を重視した資産運用の核となる債券投資を徹底解説
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-white text-finance-blue hover:bg-gray-100 px-4 py-2 text-sm">
                元本保証
              </Badge>
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm">
                安定収入
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 債券の基礎知識 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">債券投資の基礎知識</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-finance-blue" />
                債券とは
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                債券は政府や企業が資金調達のために発行する借用証書です。投資家は発行体にお金を貸し、定期的に利息を受け取り、満期時に元本が返済されます。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">基本構造</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 額面金額: 満期時に返済される金額</li>
                  <li>• 利率: 年間利息の割合</li>
                  <li>• 満期: 元本が返済される日</li>
                  <li>• 利払日: 利息が支払われる日</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                債券投資のメリット
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">安定した収入</span>
                    <p className="text-sm text-gray-600">定期的な利息収入が期待できる</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">元本保証性</span>
                    <p className="text-sm text-gray-600">満期まで保有すれば元本確保</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">分散効果</span>
                    <p className="text-sm text-gray-600">株式との逆相関でリスク軽減</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-amber-600" />
                2025年の債券市場
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">10年国債利回り</span>
                    <Badge variant="secondary">1.1%</Badge>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">社債スプレッド</span>
                    <Badge variant="secondary">0.8%</Badge>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    金利正常化で債券投資の魅力が向上中
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 債券の種類別詳細比較 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">債券種類別詳細比較</h2>
          
          <div className="space-y-8">
            {bondTypes.map((bond, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`${bond.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{bond.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{bond.yield}</div>
                      <div className="text-sm opacity-90">想定利回り</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">{bond.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">基本情報</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>最低投資額:</span>
                          <span className="font-medium">{bond.minInvestment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>リスクレベル:</span>
                          <Badge className={
                            bond.risk === '低' ? 'bg-green-100 text-green-800' :
                            bond.risk === '中' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {bond.risk}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>流動性:</span>
                          <span className="font-medium">{bond.liquidity}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">特徴</h4>
                      <ul className="text-sm space-y-1">
                        {bond.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-finance-blue rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">メリット</h4>
                      <ul className="text-sm space-y-1">
                        {bond.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                            <span className="text-green-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">デメリット</h4>
                      <ul className="text-sm space-y-1">
                        {bond.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-2"></div>
                            <span className="text-red-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* リスク要因と対策 */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">債券投資のリスクと対策</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {riskFactors.map((risk, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                    {risk.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{risk.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">影響度:</span>
                    <Badge className={
                      risk.impact.includes('高') ? 'bg-red-100 text-red-800' :
                      risk.impact.includes('中') ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {risk.impact}
                    </Badge>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">対策</h4>
                    <p className="text-sm text-blue-700">{risk.mitigation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2025年市場トレンド */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">2025年債券市場のトレンド</h2>
          
          <div className="space-y-6">
            {currentMarketTrends.map((trend, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        trend.impact === 'プラス' ? 'bg-green-500' :
                        trend.impact === 'マイナス' ? 'bg-red-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <h3 className="text-lg font-semibold">{trend.trend}</h3>
                    </div>
                    <Badge className={
                      trend.impact === 'プラス' ? 'bg-green-100 text-green-800' :
                      trend.impact === 'マイナス' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {trend.impact}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{trend.description}</p>
                  <div className="bg-finance-blue/10 p-3 rounded-lg">
                    <h4 className="font-medium text-finance-blue mb-1">投資家への提案</h4>
                    <p className="text-sm text-finance-blue">{trend.recommendation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 債券投資の始め方 */}
      <section className="bg-gradient-to-r from-slate-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">債券投資の始め方</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "投資目標の設定",
                description: "安定収入か値上がり益か、投資期間を明確化",
                icon: <Target className="w-8 h-8" />,
                color: "bg-finance-blue"
              },
              {
                step: "2", 
                title: "証券会社選択",
                description: "債券取り扱い種類、手数料、サービスを比較",
                icon: <Building className="w-8 h-8" />,
                color: "bg-finance-green"
              },
              {
                step: "3",
                title: "債券銘柄選択", 
                description: "信用格付、利回り、満期を総合的に判断",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "bg-amber-500"
              },
              {
                step: "4",
                title: "継続的な管理",
                description: "金利動向監視、ポートフォリオ見直し",
                icon: <Clock className="w-8 h-8" />,
                color: "bg-purple-600"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {item.icon}
                  </div>
                  <div className="mb-2">
                    <Badge className="bg-gray-100 text-gray-800 mb-2">STEP {item.step}</Badge>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
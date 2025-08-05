import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, DollarSign, BarChart3, Target, BookOpen, CheckCircle } from "lucide-react";

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-finance-green to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">株式投資完全ガイド</h1>
            <p className="text-xl text-emerald-100 mb-8">
              株式投資の基礎から応用まで、日本市場の特徴と2025年のトレンドを徹底解説
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-white text-finance-green hover:bg-gray-100 px-4 py-2 text-sm">
                初心者向け
              </Badge>
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 text-sm">
                2025年最新情報
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-finance-green" />
              目次
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">基礎知識</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 株式投資とは何か</li>
                  <li>• 株価の仕組み</li>
                  <li>• 配当金と株主優待</li>
                  <li>• 投資方法の種類</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">実践編</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 証券会社の選び方</li>
                  <li>• 銘柄分析の方法</li>
                  <li>• リスク管理</li>
                  <li>• 税金と NISA 活用</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 株式制度の歴史と本質 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">株式制度の本質的理解</h2>
        
        {/* なぜ株式が生まれたのか */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BookOpen className="w-6 h-6 mr-3 text-finance-green" />
              なぜ株式制度が生まれたのか？
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">17世紀オランダ東インド会社の革新</h3>
              <p className="text-emerald-700 mb-4">
                1602年、世界初の株式会社として設立されたオランダ東インド会社。なぜこの仕組みが必要だったのでしょうか？
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">💰 問題：巨額の資金調達</h4>
                  <p className="text-sm text-gray-700">
                    アジア貿易には莫大な資金が必要。船舶購入、人件費、商品仕入れ、リスク対応...
                    個人や家族企業では到底不可能な規模でした。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🤝 解決：リスク分散と資本結集</h4>
                  <p className="text-sm text-gray-700">
                    多くの人から少しずつ資金を集め、利益を分配。
                    一人一人のリスクは小さく、全体では大事業が可能に。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">株式制度が解決した3つの根本問題</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">資金調達問題</h4>
                  <p className="text-sm text-blue-700">大規模事業に必要な巨額資金を多数の投資家から調達</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">リスク分散問題</h4>
                  <p className="text-sm text-blue-700">事業失敗時の損失を多数の投資家で分担</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-blue-800">流動性問題</h4>
                  <p className="text-sm text-blue-700">株券売買により投資家はいつでも資金回収可能</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 株式市場の社会的役割 */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Target className="w-6 h-6 mr-3 text-finance-blue" />
              株式市場の社会的役割と存在意義
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-finance-blue">💡 企業側の視点</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">成長資金の調達</h4>
                    <p className="text-sm text-gray-700">新製品開発、設備投資、人材採用に必要な資金を調達</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">経営の透明性向上</h4>
                    <p className="text-sm text-gray-700">株主への説明責任により経営品質が向上</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">優秀な人材確保</h4>
                    <p className="text-sm text-gray-700">ストックオプション等で優秀な人材を獲得</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-emerald-600">🌱 社会全体への貢献</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold">イノベーションの促進</h4>
                    <p className="text-sm text-gray-700">リスクマネーの供給により新技術・新サービスが生まれる</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold">雇用創出</h4>
                    <p className="text-sm text-gray-700">企業成長により新規雇用が生まれ、経済が活性化</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibant">富の分配機能</h4>
                    <p className="text-sm text-gray-700">企業成長の果実を社会全体で共有する仕組み</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h4 className="font-semibold text-amber-800 mb-2">🎯 株式投資の本質的意味</h4>
              <p className="text-amber-700">
                株式投資とは単なる「お金儲け」ではありません。<strong>社会の成長と発展に参加し、その成果を共有する仕組み</strong>です。
                あなたが投資した資金は企業の成長資金となり、新しい製品やサービス、雇用を生み出します。
                つまり、株式投資は<strong>「社会への貢献」と「個人の資産形成」を同時に実現</strong>する優れた制度なのです。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 日本の株式市場の歴史と特徴 */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BarChart3 className="w-6 h-6 mr-3 text-purple-600" />
              日本株式市場の歴史と独自性
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-b from-red-50 to-pink-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 mb-3">🏯 江戸時代（1730年代）</h3>
                <h4 className="font-medium text-red-700 mb-2">大阪堂島米会所</h4>
                <p className="text-sm text-red-600 mb-3">世界初の先物取引市場。米の価格変動リスクを管理する仕組みとして誕生。</p>
                <div className="text-xs text-red-600">
                  <p><strong>革新点</strong>: 標準化された取引、清算機関の設置</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-3">📈 明治時代（1878年）</h3>
                <h4 className="font-medium text-blue-700 mb-2">東京株式取引所設立</h4>
                <p className="text-sm text-blue-600 mb-3">西洋式の株式会社制度を導入。近代産業発展の基盤を構築。</p>
                <div className="text-xs text-blue-600">
                  <p><strong>目的</strong>: 殖産興業政策の資金調達基盤</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-lg border border-emerald-100">
                <h3 className="font-semibold text-emerald-800 mb-3">🌸 戦後復興（1949年）</h3>
                <h4 className="font-medium text-emerald-700 mb-2">現在の東証設立</h4>
                <p className="text-sm text-emerald-600 mb-3">民主化と経済復興のため、広く国民に株式投資の機会を提供。</p>
                <div className="text-xs text-emerald-600">
                  <p><strong>理念</strong>: 国民経済の民主化</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">🎌 日本市場の独自性と世界的意義</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">独自の制度・文化</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>株主優待制度</strong>: 世界でも珍しい投資家還元システム</li>
                    <li>• <strong>長期保有文化</strong>: 欧米より長期投資志向が強い</li>
                    <li>• <strong>安定株主制度</strong>: 企業間の相互持合いによる安定経営</li>
                    <li>• <strong>コーポレートガバナンス改革</strong>: 近年の急速な制度改善</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">世界経済での役割</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>世界第3位の市場規模</strong>: グローバル投資の重要拠点</li>
                    <li>• <strong>技術革新の中心</strong>: 自動車、電子機器、精密機械等</li>
                    <li>• <strong>ESG投資のリーダー</strong>: 持続可能な投資の推進</li>
                    <li>• <strong>アジア市場のゲートウェイ</strong>: アジア投資の入口的役割</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 株式投資の基礎 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">株式投資の基礎知識</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-finance-green" />
                株式投資とは
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                企業の株式を購入し、その企業の成長と共に利益を得る投資方法です。株価上昇による売却益（キャピタルゲイン）と配当金（インカムゲイン）の2つの収益源があります。
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">主な特徴</h4>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• 高いリターンの可能性</li>
                  <li>• 企業の成長に参加</li>
                  <li>• 株主優待の特典</li>
                  <li>• 流動性が高い</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-finance-blue" />
                リターンとリスク
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">期待年利回り</span>
                    <Badge variant="secondary">3-7%</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-finance-green h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">リスクレベル</span>
                    <Badge variant="destructive">中〜高</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  短期的には価格変動が激しく、元本割れの可能性があります
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                日本市場の特徴
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-finance-green pl-4">
                  <h4 className="font-semibold">東京証券取引所</h4>
                  <p className="text-sm text-gray-600">プライム・スタンダード・グロース市場に分類</p>
                </div>
                <div className="border-l-4 border-finance-blue pl-4">
                  <h4 className="font-semibold">株主優待制度</h4>
                  <p className="text-sm text-gray-600">日本独特の投資家還元システム</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">NISA制度</h4>
                  <p className="text-sm text-gray-600">年間120万円まで非課税投資が可能</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 投資方法の詳細比較 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">株式投資の方法比較</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead className="bg-gradient-to-r from-finance-green to-emerald-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">投資方法</th>
                  <th className="px-6 py-4 text-left font-semibold">最低投資額</th>
                  <th className="px-6 py-4 text-left font-semibold">リスク</th>
                  <th className="px-6 py-4 text-left font-semibold">期待リターン</th>
                  <th className="px-6 py-4 text-left font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-emerald-50">
                  <td className="px-6 py-4 font-medium">個別株投資</td>
                  <td className="px-6 py-4">100株単位〜</td>
                  <td className="px-6 py-4"><Badge variant="destructive">高</Badge></td>
                  <td className="px-6 py-4">年5-15%</td>
                  <td className="px-6 py-4 text-sm">個別企業を選択。大きなリターンの可能性</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="px-6 py-4 font-medium">投資信託</td>
                  <td className="px-6 py-4">100円〜</td>
                  <td className="px-6 py-4"><Badge variant="secondary">中</Badge></td>
                  <td className="px-6 py-4">年3-8%</td>
                  <td className="px-6 py-4 text-sm">分散投資でリスク軽減。プロが運用</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="px-6 py-4 font-medium">ETF</td>
                  <td className="px-6 py-4">1,000円〜</td>
                  <td className="px-6 py-4"><Badge variant="secondary">中</Badge></td>
                  <td className="px-6 py-4">年3-7%</td>
                  <td className="px-6 py-4 text-sm">指数に連動。低コストで分散投資</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="px-6 py-4 font-medium">積立投資</td>
                  <td className="px-6 py-4">月1,000円〜</td>
                  <td className="px-6 py-4"><Badge className="bg-green-100 text-green-800">低</Badge></td>
                  <td className="px-6 py-4">年4-6%</td>
                  <td className="px-6 py-4 text-sm">時間分散でリスク軽減。初心者向け</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2025年のトレンド */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">2025年 株式投資のトレンド</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-finance-green" />
                注目セクター
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">AI・テクノロジー</span>
                  <Badge className="bg-finance-green text-white">高成長</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">再生可能エネルギー</span>
                  <Badge className="bg-emerald-600 text-white">持続成長</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">ヘルスケア</span>
                  <Badge className="bg-finance-blue text-white">安定成長</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">半導体</span>
                  <Badge className="bg-purple-600 text-white">回復期待</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>新NISA制度の影響</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-finance-green rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">年間投資枠拡大</span>
                    <p className="text-sm text-gray-600">つみたて投資枠120万円 + 成長投資枠240万円</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-finance-green rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">非課税期間無期限</span>
                    <p className="text-sm text-gray-600">長期投資により複利効果を最大化</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-finance-green rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium">個人投資家増加</span>
                    <p className="text-sm text-gray-600">制度改善により投資人口が拡大中</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 投資心理と行動経済学 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">投資心理を理解する</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                  なぜ多くの投資家が失敗するのか？
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ 感情的な判断</h4>
                  <p className="text-sm text-red-700">
                    株価が上がると「もっと上がる」と思い込み、下がると「もっと下がる」と恐怖に駆られる。
                    これが<strong>「高値買い・安値売り」</strong>の典型パターンです。
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ 確証バイアス</h4>
                  <p className="text-sm text-red-700">
                    自分の投資判断を正当化する情報ばかり集め、反対する情報は無視してしまう傾向。
                    客観的な判断ができなくなります。
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ 損失回避性</h4>
                  <p className="text-sm text-red-700">
                    人間は利益を得る喜びより、同額の損失を避けたい気持ちが2倍強い。
                    これが<strong>「利確急ぎ・損切り遅れ」</strong>を引き起こします。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-finance-green" />
                  成功する投資家の心構え
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ 長期的視点</h4>
                  <p className="text-sm text-green-700">
                    短期的な価格変動に一喜一憂せず、<strong>企業の本質的価値と成長</strong>に注目。
                    「10年後にこの会社はどうなっているか？」を考える習慣。
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ 分散投資</h4>
                  <p className="text-sm text-green-700">
                    「卵を一つのカゴに盛るな」の格言通り、複数の銘柄・業界・地域に分散。
                    一つの失敗が全体に与える影響を最小化します。
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ 継続的学習</h4>
                  <p className="text-sm text-green-700">
                    投資は<strong>「一生勉強」</strong>の世界。経済動向、企業分析、新しい投資手法を
                    常に学び続ける姿勢が成功の鍵です。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">🧠 株式投資で培われる5つの人生スキル</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  {
                    skill: "論理的思考",
                    description: "感情ではなく数字とデータで判断する力",
                    icon: "🧮"
                  },
                  {
                    skill: "忍耐力",
                    description: "短期的な誘惑に負けず長期目標を追求する力",
                    icon: "⏰"
                  },
                  {
                    skill: "情報分析力",
                    description: "膨大な情報から本質を見抜く力",
                    icon: "🔍"
                  },
                  {
                    skill: "リスク管理",
                    description: "不確実性の中でも適切な判断をする力",
                    icon: "⚖️"
                  },
                  {
                    skill: "経済理解",
                    description: "社会全体のお金の流れを理解する力",
                    icon: "🌐"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-blue-800 mb-2">{item.skill}</h4>
                    <p className="text-xs text-blue-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 始め方ガイド */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">株式投資の始め方</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "証券会社を選ぶ",
                description: "手数料、取扱銘柄、サービスを比較して選択",
                color: "bg-finance-green"
              },
              {
                step: "2", 
                title: "口座開設",
                description: "本人確認書類で口座開設。NISA口座も同時申込",
                color: "bg-finance-blue"
              },
              {
                step: "3",
                title: "投資戦略を決める", 
                description: "リスク許容度と投資目標を明確にする",
                color: "bg-amber-500"
              },
              {
                step: "4",
                title: "実際に投資開始",
                description: "少額から始めて徐々に投資額を増やす",
                color: "bg-purple-600"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
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
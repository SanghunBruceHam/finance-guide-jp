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

      {/* NISA制度の政策意図と社会的背景 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">NISA制度の本質的理解</h2>
        
        {/* なぜNISA制度が生まれたのか */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BookOpen className="w-6 h-6 mr-3 text-finance-green" />
              なぜ政府はNISA制度を作ったのか？
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 日本が直面する3つの深刻な課題</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">👴 超高齢社会</h4>
                  <p className="text-sm text-gray-700">
                    2025年には人口の30%が65歳以上。年金制度だけでは老後資金が不足。
                    <strong>個人の自助努力が不可欠</strong>。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">💰 貯蓄偏重</h4>
                  <p className="text-sm text-gray-700">
                    家計金融資産の50%以上が現預金。
                    <strong>インフレで実質価値が目減り</strong>するリスク。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">📉 投資文化の未成熟</h4>
                  <p className="text-sm text-gray-700">
                    欧米に比べ投資参加率が低い。
                    <strong>資産形成機会の格差</strong>が拡大。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-400">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">🎯 NISA制度の政策目標</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">📈 個人の資産形成促進</h4>
                  <ul className="text-sm text-emerald-600 space-y-1">
                    <li>• 非課税制度で投資のハードルを下げる</li>
                    <li>• 長期・積立・分散投資を推奨</li>
                    <li>• 若年層の投資参加を促進</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">🏛️ 国家経済の活性化</h4>
                  <ul className="text-sm text-emerald-600 space-y-1">
                    <li>• 家計資金を成長分野に誘導</li>
                    <li>• 企業の資金調達環境を改善</li>
                    <li>• 金融立国としての地位向上</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 諸外国との比較と日本の独自性 */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Target className="w-6 h-6 mr-3 text-finance-blue" />
              世界のNISA類似制度との比較
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-3">🇬🇧 イギリス（ISA）</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>開始</strong>: 1999年</p>
                  <p><strong>年間枠</strong>: 約300万円</p>
                  <p><strong>特徴</strong>: 現金ISAと株式ISAを選択</p>
                  <p><strong>成果</strong>: 国民の投資参加率大幅向上</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-b from-red-50 to-pink-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 mb-3">🇺🇸 アメリカ（IRA）</h3>
                <div className="text-sm text-red-700 space-y-2">
                  <p><strong>開始</strong>: 1974年</p>
                  <p><strong>年間枠</strong>: 約90万円</p>
                  <p><strong>特徴</strong>: 401(k)など職域制度が充実</p>
                  <p><strong>成果</strong>: 老後資金の自助努力が定着</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-b from-emerald-50 to-green-50 rounded-lg border border-emerald-100">
                <h3 className="font-semibold text-emerald-800 mb-3">🇯🇵 日本（NISA）</h3>
                <div className="text-sm text-emerald-700 space-y-2">
                  <p><strong>開始</strong>: 2014年</p>
                  <p><strong>年間枠</strong>: 360万円（世界最大級）</p>
                  <p><strong>特徴</strong>: 2つの投資枠を併用可能</p>
                  <p><strong>目標</strong>: 投資文化の根付かせ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">🎌 日本のNISAが世界最先端である理由</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">制度の柔軟性</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>2つの投資枠の併用</strong>: つみたて＋成長投資</li>
                    <li>• <strong>投資枠の再利用</strong>: 売却後翌年に枠復活</li>
                    <li>• <strong>非課税期間無期限</strong>: 世界的にも珍しい</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">投資環境の整備</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>金融庁による商品選定</strong>: 質の高い商品のみ</li>
                    <li>• <strong>手数料の透明化</strong>: 低コスト商品の普及</li>
                    <li>• <strong>投資教育の推進</strong>: 金融リテラシー向上</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NISA制度の社会的インパクト */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <TrendingUp className="w-6 h-6 mr-3 text-finance-green" />
              NISA制度が日本社会に与える影響
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-finance-green">🌱 個人レベルの変化</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold">投資デビューの後押し</h4>
                    <p className="text-sm text-gray-700">20-30代の投資参加率が大幅上昇。「投資は特別なこと」から「当たり前のこと」へ</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold">金融リテラシーの向上</h4>
                    <p className="text-sm text-gray-700">投資を始めることで経済ニュースへの関心が高まり、社会全体の金融知識が底上げ</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold">老後不安の軽減</h4>
                    <p className="text-sm text-gray-700">自助努力による資産形成で、老後への安心感が向上</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-finance-blue">🏛️ 社会システムの変化</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">資本市場の活性化</h4>
                    <p className="text-sm text-gray-700">個人マネーの流入により、企業の資金調達環境が改善</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">イノベーションの促進</h4>
                    <p className="text-sm text-gray-700">成長企業への資金供給により、技術革新と新産業創出を支援</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">年金制度への補完</h4>
                    <p className="text-sm text-gray-700">公的年金の負担軽減と持続可能性向上に貢献</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-finance-green to-emerald-500 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-2">🎯 NISA制度の真の目的</h4>
              <p>
                NISA制度は単なる<strong>「税制優遇」</strong>ではありません。
                日本を<strong>「貯蓄から投資へ」</strong>と導き、<strong>個人の資産形成</strong>と<strong>経済成長</strong>を同時に実現する
                <strong>「国家戦略」</strong>です。一人ひとりの投資行動が、結果的に日本経済全体の活力向上に繋がる
                <strong>「個人と国家のWin-Winの仕組み」</strong>として設計されています。
              </p>
            </div>
          </CardContent>
        </Card>
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

      {/* NISA投資の心理学 */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">NISA制度が投資行動に与える心理的効果</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                  なぜNISA制度は行動変容を促すのか？
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">🧠 損失回避バイアスの軽減</h4>
                  <p className="text-sm text-amber-700">
                    人間は利益より損失を2倍強く感じる性質があります。NISA制度の<strong>「非課税」という明確なメリット</strong>が
                    投資への心理的ハードルを下げ、「損をするかも」という恐怖を軽減します。
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">⏰ 時間割引率の調整</h4>
                  <p className="text-sm text-amber-700">
                    人は将来の利益より目先の利益を過大評価しがち。NISAの<strong>長期非課税制度</strong>により、
                    長期投資の価値が「見える化」され、時間軸を長く考えるようになります。
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">🎯 アンカリング効果</h4>
                  <p className="text-sm text-amber-700">
                    年間投資枠（360万円）が<strong>「目標設定のアンカー」</strong>として機能。
                    「枠いっぱい使わないともったいない」という心理で投資額が増加します。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-finance-green" />
                  NISA制度による良い投資習慣の形成
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📅 定期積立の習慣化</h4>
                  <p className="text-sm text-green-700">
                    つみたて投資枠により<strong>「自動化された投資」</strong>が可能。感情に左右されない
                    機械的な投資により、市場タイミングを図る失敗を回避できます。
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📚 学習動機の向上</h4>
                  <p className="text-sm text-green-700">
                    非課税枠という<strong>「貴重な機会」</strong>を無駄にしたくない心理から、
                    投資知識の習得意欲が高まり、より良い投資判断ができるようになります。
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🤝 社会的証明効果</h4>
                  <p className="text-sm text-green-700">
                    多くの人がNISAを利用することで<strong>「投資は普通のこと」</strong>という
                    社会的認識が広がり、投資への参加障壁が下がります。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">🎭 NISA制度による投資家の行動変化</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-4">❌ NISA前の典型的な失敗パターン</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-800">短期売買の繰り返し</h4>
                      <p className="text-sm text-red-600">税金を考えず頻繁に売買し、手数料と税金で利益を削る</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-800">感情的な投資判断</h4>
                      <p className="text-sm text-red-600">市場の上下に一喜一憂し、高値買い・安値売りを繰り返す</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium text-red-800">投資額の不安定性</h4>
                      <p className="text-sm text-red-600">その時の気分や収入で投資額がバラバラ</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-finance-green mb-4">✅ NISA後の改善された行動</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800">長期保有の意識</h4>
                      <p className="text-sm text-green-600">非課税期間を活かすため長期保有を前提とした投資</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800">計画的な投資</h4>
                      <p className="text-sm text-green-600">年間投資枠を意識した計画的な資金配分</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800">継続的な学習</h4>
                      <p className="text-sm text-green-600">貴重な非課税枠を最大活用するための知識習得</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
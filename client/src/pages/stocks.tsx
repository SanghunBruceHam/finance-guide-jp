import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, DollarSign, BarChart3, Target, BookOpen } from "lucide-react";

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
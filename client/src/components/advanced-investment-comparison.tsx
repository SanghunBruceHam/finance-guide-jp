import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Shield, Clock, DollarSign, AlertTriangle } from "lucide-react";

interface InvestmentOption {
  id: string;
  name: string;
  category: string;
  minInvestment: string;
  expectedReturn: { min: number; max: number };
  riskLevel: 'low' | 'medium' | 'high';
  liquidity: 'high' | 'medium' | 'low';
  complexity: 'beginner' | 'intermediate' | 'advanced';
  taxBenefits: boolean;
  pros: string[];
  cons: string[];
  bestFor: string[];
  marketTrends2025: string;
  detailedAnalysis: {
    volatility: number;
    sharpeRatio: number;
    maxDrawdown: number;
    correlation: number;
  };
}

const investmentOptions: InvestmentOption[] = [
  {
    id: 'stocks',
    name: '日本株式',
    category: '株式',
    minInvestment: '100円〜',
    expectedReturn: { min: 3, max: 15 },
    riskLevel: 'high',
    liquidity: 'high',
    complexity: 'intermediate',
    taxBenefits: true,
    pros: [
      '高いリターンポテンシャル',
      'NISA非課税制度活用可能',
      '株主優待制度',
      '流動性が高い',
      'インフレヘッジ効果'
    ],
    cons: [
      '価格変動が激しい',
      '個別企業リスク',
      '市場リスクの影響大',
      '感情的判断による失敗リスク'
    ],
    bestFor: [
      '長期資産形成を目指す人',
      'リスク許容度が高い人',
      '企業分析に時間をかけられる人'
    ],
    marketTrends2025: 'AI・半導体関連株が注目。新NISA制度により個人投資家の参入が加速',
    detailedAnalysis: {
      volatility: 22.5,
      sharpeRatio: 0.8,
      maxDrawdown: -35.2,
      correlation: 1.0
    }
  },
  {
    id: 'bonds',
    name: '日本国債・社債',
    category: '債券',
    minInvestment: '1万円〜',
    expectedReturn: { min: 0.5, max: 3 },
    riskLevel: 'low',
    liquidity: 'medium',
    complexity: 'beginner',
    taxBenefits: false,
    pros: [
      '元本保証（国債）',
      '安定した利息収入',
      '株式との逆相関性',
      'ポートフォリオの安定化'
    ],
    cons: [
      '低リターン',
      'インフレリスク',
      '金利上昇時の価格下落',
      '流動性やや低い'
    ],
    bestFor: [
      '安定性を重視する人',
      '退職後の資産保全',
      'ポートフォリオのバランス調整'
    ],
    marketTrends2025: '日銀の金利政策変更により国債利回りが上昇傾向。企業債券も注目',
    detailedAnalysis: {
      volatility: 3.2,
      sharpeRatio: 0.3,
      maxDrawdown: -8.1,
      correlation: -0.2
    }
  },
  {
    id: 'reit',
    name: 'J-REIT',
    category: '不動産',
    minInvestment: '1万円〜',
    expectedReturn: { min: 2, max: 8 },
    riskLevel: 'medium',
    liquidity: 'high',
    complexity: 'intermediate',
    taxBenefits: true,
    pros: [
      '不動産投資を少額で実現',
      '高い分配金利回り',
      'インフレヘッジ効果',
      '専門的管理',
      '流動性が高い'
    ],
    cons: [
      '金利感応度が高い',
      '不動産市場リスク',
      '管理会社リスク',
      '税制上の不利（分配金課税）'
    ],
    bestFor: [
      '不動産投資に興味がある人',
      '定期的な分配金を希望する人',
      'インフレ対策を考える人'
    ],
    marketTrends2025: 'オフィス需要回復とインバウンド再開でホテル系REITに注目',
    detailedAnalysis: {
      volatility: 18.7,
      sharpeRatio: 0.6,
      maxDrawdown: -28.4,
      correlation: 0.3
    }
  },
  {
    id: 'savings',
    name: '銀行預金・定期預金',
    category: '預金',
    minInvestment: '1円〜',
    expectedReturn: { min: 0.01, max: 0.3 },
    riskLevel: 'low',
    liquidity: 'high',
    complexity: 'beginner',
    taxBenefits: false,
    pros: [
      '元本保証（1,000万円まで）',
      '即座に引き出し可能',
      '手続きが簡単',
      '心理的安心感'
    ],
    cons: [
      '超低金利',
      'インフレで実質目減り',
      '機会コスト大',
      '資産形成効果なし'
    ],
    bestFor: [
      '緊急資金の保管',
      '投資未経験者',
      '短期的な資金需要がある人'
    ],
    marketTrends2025: '日銀政策変更により預金金利わずかに上昇も、依然として低水準',
    detailedAnalysis: {
      volatility: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
      correlation: 0
    }
  }
];

export default function AdvancedInvestmentComparison() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['stocks', 'bonds']);
  const [comparisonView, setComparisonView] = useState<'overview' | 'detailed' | 'scenarios'>('overview');

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const selectedInvestments = investmentOptions.filter(option => 
    selectedOptions.includes(option.id)
  );

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <Shield className="w-4 h-4" />;
      case 'medium': return <BarChart3 className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      default: return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <section id="advanced-comparison" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">高度な投資比較分析</h2>
          <p className="text-lg text-gray-600">詳細なデータと2025年市場トレンドに基づく投資判断支援</p>
        </div>

        {/* 投資商品選択 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>比較する投資商品を選択してください</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {investmentOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={selectedOptions.includes(option.id) ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-center space-y-2"
                  onClick={() => toggleOption(option.id)}
                >
                  <span className="font-medium">{option.name}</span>
                  <Badge className={getRiskColor(option.riskLevel)} variant="secondary">
                    {getRiskIcon(option.riskLevel)}
                    <span className="ml-1">{option.riskLevel}</span>
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 比較分析タブ */}
        <Tabs value={comparisonView} onValueChange={(value) => setComparisonView(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">概要比較</TabsTrigger>
            <TabsTrigger value="detailed">詳細分析</TabsTrigger>
            <TabsTrigger value="scenarios">シナリオ分析</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid gap-6">
              {selectedInvestments.map((investment) => (
                <Card key={investment.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-finance-green" />
                        {investment.name}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Badge className={getRiskColor(investment.riskLevel)}>
                          {getRiskIcon(investment.riskLevel)}
                          <span className="ml-1">{investment.riskLevel} Risk</span>
                        </Badge>
                        {investment.taxBenefits && (
                          <Badge className="bg-finance-green text-white">NISA対象</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <DollarSign className="w-4 h-4 mr-1 text-finance-blue" />
                          基本情報
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>最低投資額:</span>
                            <span className="font-medium">{investment.minInvestment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>期待リターン:</span>
                            <span className="font-medium">
                              {investment.expectedReturn.min}-{investment.expectedReturn.max}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>流動性:</span>
                            <Badge variant="outline" className="ml-2">
                              {investment.liquidity}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">メリット・デメリット</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-green-700 mb-1">メリット</h5>
                            <ul className="text-xs text-green-600 space-y-1">
                              {investment.pros.slice(0, 3).map((pro, idx) => (
                                <li key={idx}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-red-700 mb-1">デメリット</h5>
                            <ul className="text-xs text-red-600 space-y-1">
                              {investment.cons.slice(0, 3).map((con, idx) => (
                                <li key={idx}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">2025年トレンド</h4>
                        <p className="text-sm text-gray-600 mb-3">{investment.marketTrends2025}</p>
                        <div>
                          <h5 className="text-sm font-medium mb-1">適している人</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {investment.bestFor.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="mt-8">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>リスク・リターン分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">投資商品</th>
                          <th className="text-left p-3">ボラティリティ</th>
                          <th className="text-left p-3">シャープレシオ</th>
                          <th className="text-left p-3">最大下落率</th>
                          <th className="text-left p-3">株式相関</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedInvestments.map((investment) => (
                          <tr key={investment.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{investment.name}</td>
                            <td className="p-3">
                              <div className="flex items-center space-x-2">
                                <Progress 
                                  value={investment.detailedAnalysis.volatility} 
                                  className="w-20 h-2" 
                                />
                                <span className="text-sm">{investment.detailedAnalysis.volatility}%</span>
                              </div>
                            </td>
                            <td className="p-3">{investment.detailedAnalysis.sharpeRatio}</td>
                            <td className="p-3 text-red-600">{investment.detailedAnalysis.maxDrawdown}%</td>
                            <td className="p-3">{investment.detailedAnalysis.correlation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ポートフォリオ最適化提案</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">保守的ポートフォリオ</h4>
                      <div className="space-y-2 text-sm">
                        <div>債券: 60%</div>
                        <div>株式: 30%</div>
                        <div>預金: 10%</div>
                      </div>
                      <p className="text-xs text-green-600 mt-2">年3-5%の安定リターン</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">バランス型ポートフォリオ</h4>
                      <div className="space-y-2 text-sm">
                        <div>株式: 50%</div>
                        <div>債券: 30%</div>
                        <div>REIT: 20%</div>
                      </div>
                      <p className="text-xs text-blue-600 mt-2">年5-8%のバランス重視</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">積極的ポートフォリオ</h4>
                      <div className="space-y-2 text-sm">
                        <div>株式: 70%</div>
                        <div>REIT: 20%</div>
                        <div>債券: 10%</div>
                      </div>
                      <p className="text-xs text-red-600 mt-2">年8-12%の高リターン狙い</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios" className="mt-8">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-finance-green" />
                    市場シナリオ分析（2025-2030年）
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-3">楽観シナリオ</h4>
                      <ul className="text-sm space-y-2">
                        <li>• AI技術革新により経済成長加速</li>
                        <li>• 日経平均 45,000円到達</li>
                        <li>• 金利正常化で銀行株上昇</li>
                        <li>• インバウンド完全回復</li>
                      </ul>
                      <div className="mt-4 p-2 bg-green-50 rounded">
                        <p className="text-sm text-green-800">株式: +12-15% 年率リターン期待</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-3">標準シナリオ</h4>
                      <ul className="text-sm space-y-2">
                        <li>• 緩やかな経済成長継続</li>
                        <li>• 日経平均 38,000-42,000円推移</li>
                        <li>• 適度なインフレ率維持</li>
                        <li>• 企業業績堅調</li>
                      </ul>
                      <div className="mt-4 p-2 bg-blue-50 rounded">
                        <p className="text-sm text-blue-800">株式: +6-8% 年率リターン期待</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-3">悲観シナリオ</h4>
                      <ul className="text-sm space-y-2">
                        <li>• 地政学リスク拡大</li>
                        <li>• 日経平均 28,000-32,000円推移</li>
                        <li>• 企業業績悪化</li>
                        <li>• 円安進行で輸入コスト上昇</li>
                      </ul>
                      <div className="mt-4 p-2 bg-red-50 rounded">
                        <p className="text-sm text-red-800">株式: -2-2% 年率リターン</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Activity, Globe, Calendar, AlertCircle, Newspaper, BarChart3 } from "lucide-react";

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: string;
}

interface TrendNews {
  id: string;
  title: string;
  summary: string;
  category: 'market' | 'policy' | 'international' | 'sector' | 'nisa';
  date: string;
  impact: 'high' | 'medium' | 'low';
  relevantInvestments: string[];
  source: string;
  tags: string[];
}

interface SectorTrend {
  sector: string;
  performance: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
  keyStocks: string[];
  outlook: string;
}

export default function MarketTrendsDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [marketData] = useState<MarketData[]>([
    { symbol: 'N225', name: '日経平均', price: 39180, change: 245, changePercent: 0.63 },
    { symbol: 'TPX', name: 'TOPIX', price: 2698, change: -12, changePercent: -0.44 },
    { symbol: 'USDJPY', name: 'ドル円', price: 149.85, change: 0.32, changePercent: 0.21 },
    { symbol: '10YJP', name: '10年国債', price: 1.085, change: 0.015, changePercent: 1.40 }
  ]);

  const [trendingNews] = useState<TrendNews[]>([
    {
      id: '1',
      title: '新NISA制度開始から1年、個人投資家の動向分析',
      summary: '2024年開始の新NISA制度により、個人投資家の投資行動に大きな変化。つみたて投資枠の利用率が前年比150%増加し、特に20-30代の若年層の参入が顕著。',
      category: 'nisa',
      date: '2025-01-15',
      impact: 'high',
      relevantInvestments: ['株式投資信託', 'ETF', '個別株'],
      source: '金融庁統計',
      tags: ['新NISA', '個人投資家', '若年層投資']
    },
    {
      id: '2', 
      title: '日銀の金利政策転換が投資環境に与える影響',
      summary: '日本銀行の段階的な金利正常化により、銀行株や保険株に資金流入。一方で、高配当株やREITからの資金流出も観測され、投資戦略の見直しが必要な状況。',
      category: 'policy',
      date: '2025-01-12',
      impact: 'high',
      relevantInvestments: ['銀行株', '保険株', 'REIT', '債券'],
      source: '日本銀行',
      tags: ['金利政策', '銀行株', 'REIT']
    },
    {
      id: '3',
      title: 'AI半導体関連株の2025年見通し',
      summary: '生成AI需要の拡大により、半導体関連株に注目が集まる。特に日本の半導体製造装置メーカーや素材メーカーの業績向上が期待される。',
      category: 'sector', 
      date: '2025-01-10',
      impact: 'medium',
      relevantInvestments: ['テクノロジー株', '半導体ETF'],
      source: '業界レポート',
      tags: ['AI', '半導体', 'テクノロジー']
    },
    {
      id: '4',
      title: '円安環境下での海外投資戦略',
      summary: '継続する円安環境を受け、海外ETFや外国株式への投資が注目。為替ヘッジの有無による投資成果の違いも分析。',
      category: 'international',
      date: '2025-01-08',
      impact: 'medium', 
      relevantInvestments: ['海外ETF', '外国株式', '為替ヘッジ型投信'],
      source: '投資情報会社',
      tags: ['円安', '海外投資', '為替ヘッジ']
    }
  ]);

  const [sectorTrends] = useState<SectorTrend[]>([
    {
      sector: 'テクノロジー',
      performance: 8.5,
      trend: 'up',
      description: 'AI・半導体関連株が牽引。特に生成AI需要が追い風',
      keyStocks: ['ソニーG', '東京エレクトロン', 'アドバンテスト'],
      outlook: '2025年も堅調な成長が期待される'
    },
    {
      sector: '金融',
      performance: 12.3,
      trend: 'up', 
      description: '金利上昇により銀行・保険株が大幅上昇',
      keyStocks: ['三菱UFJ', '三井住友FG', '東京海上HD'],
      outlook: '金利正常化進行で更なる上昇余地'
    },
    {
      sector: '不動産',
      performance: -5.2,
      trend: 'down',
      description: '金利上昇懸念とオフィス需要減で調整局面',
      keyStocks: ['三井不動産', '住友不動産', '東急不動産HD'],
      outlook: 'インバウンド回復で下半期は反発期待'
    },
    {
      sector: 'ヘルスケア',
      performance: 3.8,
      trend: 'stable',
      description: '高齢化社会を背景に安定した成長を維持',
      keyStocks: ['武田薬品', 'アステラス', 'エーザイ'],
      outlook: '新薬開発次第で大きな上昇も'
    }
  ]);

  const getCategoryColor = (category: string) => {
    const colors = {
      market: 'bg-finance-green text-white',
      policy: 'bg-finance-blue text-white', 
      international: 'bg-purple-600 text-white',
      sector: 'bg-amber-600 text-white',
      nisa: 'bg-emerald-600 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600 text-white';
  };

  const getImpactColor = (impact: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[impact as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <section id="trends" className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">2025年 投資トレンド ダッシュボード</h2>
          <p className="text-lg text-gray-600">リアルタイム市場データと専門分析による投資判断支援</p>
        </div>

        {/* 市況サマリー */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {marketData.map((data) => (
            <Card key={data.symbol}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{data.name}</span>
                  {data.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <div className="text-lg font-bold">{data.price.toLocaleString()}</div>
                <div className={`text-sm font-medium ${data.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {data.change >= 0 ? '+' : ''}{data.change} ({data.changePercent >= 0 ? '+' : ''}{data.changePercent}%)
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">市場概況</TabsTrigger>
            <TabsTrigger value="news">トレンドニュース</TabsTrigger>
            <TabsTrigger value="sectors">セクター分析</TabsTrigger>
            <TabsTrigger value="forecasts">2025年予測</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-finance-green" />
                    今週のマーケットハイライト
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">金融株が大幅上昇</h4>
                        <p className="text-sm text-green-700">日銀の金利政策変更期待により、銀行・保険株が週間で10%超の上昇</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">AI関連株に資金流入</h4>
                        <p className="text-sm text-blue-700">生成AI市場の拡大期待で、半導体・ソフトウェア関連株に買いが集中</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-amber-800">REIT市場は調整継続</h4>
                        <p className="text-sm text-amber-700">金利上昇懸念により、特にオフィス系REITの調整が継続</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>投資家センチメント</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">強気派</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">中立派</span>
                        <span className="text-sm font-medium">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '22%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">弱気派</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-finance-green/10 rounded-lg">
                    <p className="text-sm text-finance-green font-medium">
                      市場センチメントは強気傾向。新NISA効果による個人投資家の参入が継続
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="news" className="mt-8">
            <div className="space-y-6">
              {trendingNews.map((news) => (
                <Card key={news.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className={getCategoryColor(news.category)}>
                          {news.category}
                        </Badge>
                        <Badge className={getImpactColor(news.impact)} variant="secondary">
                          {news.impact} impact
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {news.date}
                        </span>
                      </div>
                      <Newspaper className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {news.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">関連投資商品: {news.relevantInvestments.join(', ')}</span>
                        <span className="text-gray-400">出典: {news.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sectors" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sectorTrends.map((sector) => (
                <Card key={sector.sector}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{sector.sector}</span>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(sector.trend)}
                        <span className={`font-bold ${sector.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {sector.performance >= 0 ? '+' : ''}{sector.performance}%
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">注目銘柄</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.keyStocks.map((stock, idx) => (
                          <Badge key={idx} variant="outline">
                            {stock}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-1">今後の見通し</h4>
                      <p className="text-sm text-gray-600">{sector.outlook}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forecasts" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-finance-blue" />
                    2025年経済予測
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">GDP成長率予測</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-finance-green">+1.2%</span>
                        <span className="text-sm text-gray-600">（前年比）</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">AI技術革新と設備投資拡大が成長を牽引</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">インフレ率予測</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-amber-600">+2.1%</span>
                        <span className="text-sm text-gray-600">（消費者物価指数）</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">エネルギー価格安定により目標水準で推移</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">政策金利予測</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-finance-blue">0.5-0.75%</span>
                        <span className="text-sm text-gray-600">（年末時点）</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">段階的な金利正常化を継続予定</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>投資戦略提案</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">✓ 推奨戦略</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 金融株の段階的な組み入れ</li>
                        <li>• AI・テクノロジー株への継続投資</li>
                        <li>• 新NISA枠の最大活用</li>
                        <li>• 海外分散投資の検討</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">⚠ 注意事項</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• 金利敏感株のボラティリティ</li>
                        <li>• 地政学リスクの継続監視</li>
                        <li>• 過度な集中投資の回避</li>
                        <li>• 定期的なポートフォリオ見直し</li>
                      </ul>
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
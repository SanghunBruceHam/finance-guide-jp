import { Badge } from "@/components/ui/badge";

export default function InvestmentComparison() {
  return (
    <section id="comparison" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">投資先の詳細比較</h2>
          <p className="text-lg text-gray-600">各投資方法の特徴を一目で比較できます</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-finance-green to-emerald-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">投資先</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">期待リターン</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">主なメリット</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">注意点</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">リスクレベル</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">最低投資額</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-emerald-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-finance-green rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">株</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">年3-7%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">高リターン、NISA非課税枠、配当収入</td>
                  <td className="px-6 py-4 text-sm text-gray-600">価格変動が大きい、企業リスク</td>
                  <td className="px-6 py-4">
                    <Badge variant="destructive">中～高</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">100円～</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-finance-blue rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">債券</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">年1-3%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">安定性、固定収入、元本保証</td>
                  <td className="px-6 py-4 text-sm text-gray-600">低リターン、インフレリスク</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary">低～中</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">1万円～</td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">不動産</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">年2-5%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">家賃収入、REITで少額投資可、インフレ対策</td>
                  <td className="px-6 py-4 text-sm text-gray-600">管理コスト、流動性が低い</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary">中</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">1万円～（REIT）</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">銀行預金</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">年0.01-0.3%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">安全性、元本保証、即座に引き出し可能</td>
                  <td className="px-6 py-4 text-sm text-gray-600">超低利回り、インフレで実質目減り</td>
                  <td className="px-6 py-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">低</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">1円～</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border-l-4 border-finance-blue p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-finance-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-finance-blue">重要なポイント</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>• NISAを活用すれば株式投資の利益が非課税になります（年120万円まで）</p>
                <p>• 分散投資でリスクを軽減できます</p>
                <p>• 投資期間が長いほど複利効果が期待できます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

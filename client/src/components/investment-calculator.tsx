import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InvestmentCalculator() {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [monthlyAmount, setMonthlyAmount] = useState(30000);
  const [annualReturn, setAnnualReturn] = useState(5);
  const [investmentYears, setInvestmentYears] = useState(10);
  
  const [results, setResults] = useState({
    finalAmount: 0,
    totalInvestment: 0,
    totalProfit: 0,
    compoundBenefit: 0
  });

  const calculateInvestment = () => {
    const monthlyReturn = annualReturn / 100 / 12;
    const totalMonths = investmentYears * 12;
    
    // Calculate future value with compound interest
    let futureValue = initialAmount * Math.pow(1 + monthlyReturn, totalMonths);
    
    // Add monthly contributions with compound interest
    if (monthlyReturn > 0) {
      futureValue += monthlyAmount * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);
    } else {
      futureValue += monthlyAmount * totalMonths;
    }
    
    const totalInvestment = initialAmount + (monthlyAmount * totalMonths);
    const totalProfit = futureValue - totalInvestment;
    
    // Calculate simple interest comparison for compound benefit
    const simpleInterestTotal = totalInvestment + (totalInvestment * (annualReturn / 100) * investmentYears);
    const compoundBenefit = Math.max(0, futureValue - simpleInterestTotal);
    
    setResults({
      finalAmount: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalProfit: Math.round(totalProfit),
      compoundBenefit: Math.round(compoundBenefit)
    });
  };

  useEffect(() => {
    calculateInvestment();
  }, [initialAmount, monthlyAmount, annualReturn, investmentYears]);

  return (
    <section id="calculator" className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">投資計算機</h2>
          <p className="text-lg text-gray-600">複利効果を実感してみましょう</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg border border-gray-200 p-8">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">投資条件を入力</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="initial-amount" className="text-sm font-medium text-gray-700 mb-2">
                        初期投資額（円）
                      </Label>
                      <Input
                        id="initial-amount"
                        type="number"
                        value={initialAmount}
                        min="0"
                        step="10000"
                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="monthly-amount" className="text-sm font-medium text-gray-700 mb-2">
                        毎月の積立額（円）
                      </Label>
                      <Input
                        id="monthly-amount"
                        type="number"
                        value={monthlyAmount}
                        min="0"
                        step="1000"
                        onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="annual-return" className="text-sm font-medium text-gray-700 mb-2">
                        年利回り（%）
                      </Label>
                      <Input
                        id="annual-return"
                        type="number"
                        value={annualReturn}
                        min="0"
                        max="20"
                        step="0.1"
                        onChange={(e) => setAnnualReturn(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="investment-years" className="text-sm font-medium text-gray-700 mb-2">
                        投資期間（年）
                      </Label>
                      <Input
                        id="investment-years"
                        type="number"
                        value={investmentYears}
                        min="1"
                        max="50"
                        step="1"
                        onChange={(e) => setInvestmentYears(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">計算結果</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-finance-green to-emerald-500 rounded-lg p-6 text-white">
                      <div className="text-sm font-medium opacity-90">最終資産額</div>
                      <div className="text-3xl font-bold">
                        ¥{results.finalAmount.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-700">投資元本</div>
                        <div className="text-xl font-bold text-finance-blue">
                          ¥{results.totalInvestment.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-700">運用益</div>
                        <div className="text-xl font-bold text-emerald-600">
                          ¥{results.totalProfit.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="text-sm font-medium text-amber-800">複利効果</div>
                      <div className="text-sm text-amber-700 mt-1">
                        単利の場合より
                        <span className="font-semibold">¥{results.compoundBenefit.toLocaleString()}</span>
                        多く増えます
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  ※ この計算は概算であり、実際の投資収益を保証するものではありません
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

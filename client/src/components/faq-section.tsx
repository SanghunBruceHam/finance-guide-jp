import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (faqNumber: number) => {
    setOpenFAQ(openFAQ === faqNumber ? null : faqNumber);
  };

  const faqs = [
    {
      id: 1,
      question: "NISAとiDeCoの違いは何ですか？",
      answer: (
        <div>
          <p className="mb-3">
            NISAは一般的な投資用の非課税制度で、いつでも換金可能です。年間投資枠は360万円（つみたて投資枠120万円＋成長投資枠240万円）です。
          </p>
          <p>
            一方、iDeCoは老後資金作りに特化した制度で、60歳まで引き出せませんが、掛金が全額所得控除の対象となり、より大きな税制優遇があります。
          </p>
        </div>
      )
    },
    {
      id: 2,
      question: "投資を始めるのに最低いくら必要ですか？",
      answer: (
        <div>
          <p className="mb-3">
            多くの証券会社では100円から投資信託の積立投資を始められます。株式投資でも数千円から購入可能な銘柄が多数あります。
          </p>
          <p>
            まずは月々1万円程度の少額から始めて、投資に慣れてから金額を増やしていくことをお勧めします。
          </p>
        </div>
      )
    },
    {
      id: 3,
      question: "初心者におすすめの投資方法は？",
      answer: (
        <div>
          <p className="mb-3">初心者には以下の順番での投資をお勧めします：</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>全世界株式インデックスファンドでの積立投資（NISA活用）</li>
            <li>国内外の債券ファンドでリスク分散</li>
            <li>慣れてきたら個別株式やREITに挑戦</li>
          </ol>
          <p className="mt-3">重要なのは長期的な視点での分散投資です。</p>
        </div>
      )
    },
    {
      id: 4,
      question: "投資で損をした場合はどうすればいいですか？",
      answer: (
        <div>
          <p className="mb-3">短期的な損失は投資では避けられません。重要なのは冷静に対応することです：</p>
          <ul className="list-disc list-inside space-y-2">
            <li>感情的な売買は避ける</li>
            <li>長期的な視点を保つ</li>
            <li>分散投資でリスクを管理する</li>
            <li>余裕資金の範囲内で投資する</li>
          </ul>
          <p className="mt-3">また、損益通算や損失の繰越控除などの税制優遇制度も活用できます。</p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <p className="text-lg text-gray-600">投資初心者の疑問にお答えします</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-finance-green rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

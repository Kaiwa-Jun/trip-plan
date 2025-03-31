'use client';

import Link from 'next/link';

export default function MyPlans() {
  // 仮のサンプルデータ
  const samplePlans = [
    {
      id: 1,
      destination: '京都',
      dates: '2025-05-01 ~ 2025-05-04',
      createdAt: '2025-03-15',
    },
    {
      id: 2,
      destination: '北海道',
      dates: '2025-07-20 ~ 2025-07-25',
      createdAt: '2025-03-20',
    },
    {
      id: 3,
      destination: '沖縄',
      dates: '2025-08-10 ~ 2025-08-15',
      createdAt: '2025-03-25',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">マイプラン一覧</h1>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6">
        <p className="text-sm">
          ここに保存した旅行プランが一覧表示されます。（認証実装前のプレースホルダ）
        </p>
      </div>

      {samplePlans.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl mb-4">保存されたプランがありません</p>
          <Link
            href="/create"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            新しいプランを作成する
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {samplePlans.map(plan => (
            <div key={plan.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{plan.destination}旅行</h2>
                  <p className="text-gray-600">期間: {plan.dates}</p>
                  <p className="text-sm text-gray-500">作成日: {plan.createdAt}</p>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/plan?id=${plan.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
                  >
                    詳細
                  </Link>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm"
                    onClick={() => alert('この機能は近日実装予定です')}
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/create"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg inline-block"
        >
          新しいプランを作成する
        </Link>
      </div>
    </div>
  );
}

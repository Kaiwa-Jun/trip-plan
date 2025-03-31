'use client';

import Link from 'next/link';

export default function Plan() {
  // 仮のサンプルデータ
  const samplePlan = {
    destination: '京都',
    dates: '2025-05-01 ~ 2025-05-04',
    days: [
      {
        day: 1,
        date: '2025-05-01',
        schedule: [
          {
            time: '09:00',
            activity: '京都駅到着',
            description: 'ホテルにチェックイン',
          },
          {
            time: '11:00',
            activity: '清水寺',
            description: '京都を代表する寺院を訪問',
          },
          { time: '13:00', activity: '昼食', description: '祇園でランチ' },
          {
            time: '15:00',
            activity: '八坂神社',
            description: '歴史ある神社を参拝',
          },
          {
            time: '18:00',
            activity: '夕食',
            description: '京都の伝統料理を楽しむ',
          },
        ],
      },
      {
        day: 2,
        date: '2025-05-02',
        schedule: [
          { time: '08:00', activity: '朝食', description: 'ホテルで和朝食' },
          {
            time: '10:00',
            activity: '金閣寺',
            description: '世界遺産の金閣寺を見学',
          },
          { time: '13:00', activity: '昼食', description: '湯豆腐を楽しむ' },
          {
            time: '15:00',
            activity: '龍安寺',
            description: '有名な石庭を鑑賞',
          },
          {
            time: '18:00',
            activity: '夕食',
            description: '京都の居酒屋で地酒と料理を楽しむ',
          },
        ],
      },
      {
        day: 3,
        date: '2025-05-03',
        schedule: [
          {
            time: '09:00',
            activity: '伏見稲荷大社',
            description: '千本鳥居を散策',
          },
          { time: '12:00', activity: '昼食', description: '稲荷寿司を味わう' },
          { time: '14:00', activity: '嵐山', description: '竹林の小径を散策' },
          { time: '16:00', activity: '渡月橋', description: '景色を楽しむ' },
          { time: '18:00', activity: '夕食', description: '川床料理を体験' },
        ],
      },
      {
        day: 4,
        date: '2025-05-04',
        schedule: [
          {
            time: '09:00',
            activity: '二条城',
            description: '世界遺産の二条城を見学',
          },
          {
            time: '12:00',
            activity: '昼食',
            description: '京都駅ビルでランチ',
          },
          { time: '14:00', activity: '帰路', description: '京都駅から出発' },
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">生成された旅行プラン</h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-2">{samplePlan.destination}旅行</h2>
        <p className="text-lg mb-4">期間: {samplePlan.dates}</p>
        <p className="italic">
          このプランはAIによって生成されたサンプルです。実際の旅行計画の参考としてご利用ください。
        </p>
      </div>

      {samplePlan.days.map(day => (
        <div key={day.day} className="mb-8 border-b pb-6">
          <h3 className="text-xl font-bold mb-4">
            {day.day}日目: {day.date}
          </h3>
          <div className="space-y-4">
            {day.schedule.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-20 font-bold">{item.time}</div>
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-10">
        <Link
          href="/create"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          プランを修正する
        </Link>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('この機能は近日実装予定です')}
        >
          プランを保存する
        </button>
      </div>
    </div>
  );
}

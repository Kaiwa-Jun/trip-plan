"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePlan() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destination: "",
    dates: "",
    purpose: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで後ほどAI連携処理を実装予定
    console.log("送信されたデータ:", formData);

    // 仮の実装として、プラン表示ページに遷移
    router.push("/plan");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">旅行プラン作成</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="destination" className="block text-lg font-medium">
            旅行先
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="例: 京都、ハワイ、パリ"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="dates" className="block text-lg font-medium">
            旅行日程
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            placeholder="例: 2025-05-01 ~ 2025-05-07"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="purpose" className="block text-lg font-medium">
            旅行の目的
          </label>
          <textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="例: 歴史的な建造物を巡りたい、現地の食文化を楽しみたい"
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
          プラン生成
        </button>
      </form>
    </div>
  );
}

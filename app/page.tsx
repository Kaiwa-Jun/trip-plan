import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">AI旅行プランナー</h1>
      <p className="text-xl mb-8 max-w-2xl">
        旅行先や目的を入力して、最適な旅行プランをAIが提案します。
      </p>
      <Image
        src="/globe.svg"
        alt="旅行アイコン"
        width={120}
        height={120}
        className="mb-8"
      />
      <Link
        href="/create"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
      >
        旅行プラン作成
      </Link>
    </div>
  );
}

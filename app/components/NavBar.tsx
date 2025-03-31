import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">AI旅行プランナー</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/create" className="text-white hover:text-gray-300">
                旅行プラン作成
              </Link>
            </li>
            <li>
              <Link href="/my-plans" className="text-white hover:text-gray-300">
                マイプラン一覧
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

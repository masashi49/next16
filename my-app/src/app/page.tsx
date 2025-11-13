export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
          基本情報処理技術者試験
        </h1>
        <p className="mt-2">11/13</p>
        <p>
          コンピュータが表す0と1の世界、これを用いて、コンピュータの情報は表される。
          <br />
          これは電球のオンオフのようなイメージで、電球がいくつも集合して人間にわかるよう形作っている。
          <br />
          電球1つの単位を1ビットと呼ぶ、
        </p>
        <p>
          コンピュータは2進数の世界で動いている。
          <br />
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ゼロ
                </th>
                <td>0</td>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  イチ
                </th>

                <td>1</td>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ニ
                </th>
                <td>10</td>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  サン
                </th>
                <td>11</td>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  シ
                </th>
                <td>100 ⬅︎ 4で桁が上がる。9に1足して10になるのと同じ。</td>
              </tr>
            </table>
          </div>
          <p className="mt-4">
            8進数だと、0~7で1桁となり、8にはならず10になる。
            <br />
            77までいくと、その次は100となる
          </p>
          <p className="mt-4">
            16進数だと、0~9までがそのまま、10~15までがA~Fで表される。
            <br />
            123456789abcdefとなる。 fの次は10となる。11,12,...1f の次に
            20となる。 ffの次は100となる。 <br />
            2進数を10進数に変換するとところまで完了 33P
          </p>
        </p>
      </main>
    </div>
  );
}

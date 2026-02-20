export default function CommunicationsPage() {
  const announcements = [
    { date: "2026.02.20", title: "올바른 술문화 연구소 웹사이트 개설 안내", category: "공지" },
    { date: "2026.02.15", title: "3월 신입생 대상 음주 교육 일정 안내", category: "교육" },
    { date: "2026.02.10", title: "안전 귀가 도우미 봉사단 상시 모집", category: "모집" },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001F3F] py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Communications</h1>
          <p className="mt-4 text-slate-300">연구소의 소식과 활동을 확인하세요.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#001F3F] mb-8">공지사항</h2>
            <div className="overflow-hidden rounded-2xl border">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700">구분</th>
                    <th className="px-6 py-4 font-bold text-slate-700">제목</th>
                    <th className="px-6 py-4 font-bold text-slate-700">날짜</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {announcements.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">{item.category}</span>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-800">{item.title}</td>
                      <td className="px-6 py-4 text-slate-500 text-sm">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-[#001F3F]">활동 갤러리</h2>
              <button className="text-amber-600 font-bold hover:underline">더보기</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                  Placeholder {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

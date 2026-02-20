export default function DataLabPage() {
  const materials = [
    { title: "안전한 음주 가이드라인 (2026)", type: "PDF", size: "1.2MB" },
    { title: "대학생 술게임 자제 및 안전 가이드", type: "PPT", size: "4.5MB" },
    { title: "기업 회식 문화 개선 사례 보고서", type: "PDF", size: "2.8MB" },
    { title: "음주 적격 테스트 기출 문제집", type: "ZIP", size: "15MB" },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001F3F] py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Data Lab</h1>
          <p className="mt-4 text-slate-300">연구소의 축적된 데이터와 강연 자료를 공유합니다.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">자료 및 가이드라인</h2>
            <p className="text-slate-600 text-center mb-12">올바른 술문화를 위해 연구소에서 제작한 자료를 자유롭게 활용하세요.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {materials.map((file, idx) => (
                <div key={idx} className="flex items-center p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mr-4 font-bold">
                    {file.type}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{file.title}</h4>
                    <p className="text-xs text-slate-400">{file.size}</p>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-navy transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001F3F] py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">About</h1>
          <p className="mt-4 text-slate-300">올바른 술문화 연구소에 대해 알려드립니다.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-6">설립 취지</h2>
            <div className="prose prose-lg text-slate-600">
              <p>
                현대 사회의 무분별한 음주 문화는 개인의 건강을 해칠 뿐만 아니라 각종 사회적 비용을 발생시키고 있습니다.
                올바른 술문화 연구소는 "술 권하는 사회"가 아닌 "책임감 있게 즐기는 사회"를 만들기 위해 설립되었습니다.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-6">인사말</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 bg-slate-100 aspect-[3/4] rounded-2xl flex items-center justify-center text-slate-400">
                [대표 사진 영역]
              </div>
              <div className="w-full md:w-2/3 prose text-slate-600 font-medium">
                <p>안녕하세요. 올바른 술문화 연구소입니다.</p>
                <p>저희는 음주의 즐거움 자체를 부정하지 않습니다. 다만, 그 즐거움이 타인에게 피해를 주거나 스스로의 건강을 망치는 일이 없도록 체계적인 가이드와 교육 프로그램을 제공하고자 합니다.</p>
                <p>여러분과 함께 건강하고 안전한 술자리를 만들어 가겠습니다. 감사합니다.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#001F3F] mb-6">연구소 연혁</h2>
            <div className="relative border-l-2 border-slate-200 pl-8 ml-4">
              <div className="mb-8 relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white"></div>
                <h4 className="text-xl font-bold">2024. 12</h4>
                <p className="text-slate-600">올바른 술문화 연구소 개소</p>
              </div>
              <div className="mb-8 relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 className="text-xl font-bold text-slate-400">2025. 01 ~</h4>
                <p className="text-slate-500">지속적인 공인 캠페인 및 교육 사업 전개</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

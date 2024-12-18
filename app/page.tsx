import Image from 'next/image';

export default function Home() {
  return (
    <section>
      {/* 자기소개 섹션 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">안녕하세요! 저는 손민환입니다.</h2>
      </div>

      {/* 프로젝트 섹션 */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">프로젝트</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 프로젝트 카드 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-medium">Project 1</h4>
              <p className="text-gray-600 mt-1">Next.js와 Tailwind CSS를 사용한 웹사이트</p>
            </div>
          </div>

          {/* 프로젝트 카드 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-medium">Project 2</h4>
              <p className="text-gray-600 mt-1">React와 TypeScript 기반의 웹 애플리케이션</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
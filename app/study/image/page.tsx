"use client"

import Image from "next/image"

export default function Page() {
  return (
    <div className="p-8">
      <div>
        <div className="text-3xl font-semibold">
          Next.js Image 컴포넌트
        </div>
        <div>
            <div>이미지를 최적화해주는 next 컴포넌트</div>
            <div> - 용량 최적화</div>
            <div> - 로딩 속도 최적화: webp 같은 최적 포맷 사용</div>
            <div> - 화면 비율 자동 조절</div>
            <div> - Lazy Loading</div>
        </div>
        <div>
            <div> 1. width, height를 할당 필요 </div>
            <Image src="/images/emotion/happy.png" width={150} height={150} alt="happy"></Image>
            
            <div> 2. fill 속성 사용. 부모에게 position: relative 할당 </div>
            <div> -aspect를 이용해서 비율 고정</div>
            <div className="border border-1 w-100 p-4">
                <div>본문 내용문 본문 내용문 본문 내용문 본문 내용문</div>
                <div className="relative w-full aspect-4/4 shadow-xl rounded-xl">
                <Image src="/images/emotion/happy.png" fill alt="happy" className="rounded-xl"></Image>
            </div>
            </div>
            
            
        </div>
        </div>
    </div>
  )
}
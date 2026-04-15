"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getDiaryMonthly } from "@/lib/api/diary"
import { Diary } from "@/types/diary"
import { useState } from "react"
import Image from "next/image"


export default function Page() {
    const[ year, setYear] = useState("2026")
    const[ month, setMonth ] = useState("4")
    const[diaries, setDiaries] = useState<Diary[]>([])
    

    const search = async() => {
        const result = await getDiaryMonthly(Number(year), Number(month))
        setDiaries(result)
    }

    return (
        <div className="p-8">
            <div>
                <Input 
                placeholder="년도를 선택하세요"
                value={year} onChange={e => setYear(e.target.value)}></Input>
                <Input 
                placeholder="월을 선택하세요"
                value={month} onChange={e => setMonth(e.target.value)}></Input>
             <Button onClick={search}>조회</Button>
             
            </div>

            <div>
                {diaries.map((item, i) => (
                    <div key={i}>
                        {item.title}
                        <div className="relative w-20 aspect-square">
                            <Image src={`/images/emotion/${item.emotion.toLowerCase()}.png`} fill alt={item.emotion}></Image>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
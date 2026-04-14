"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getDiaryMonthly } from "@/lib/api/diary"
import { Diary } from "@/types/diary"
import { useState } from "react"

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
            <div className="mt-4 space-y-2">
                {diaries.map((diary, index) => (
                <div key={index}>  
                    {diary.title}
                </div>
                ))}
            </div>

        </div>
    )
}
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createDiary } from "@/lib/api/diary"
import { Emotion, Weather } from "@/types/diary"
import { useState } from "react"
import { toast } from "sonner"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

export default function Page() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [diaryDate, setDiaryDate] = useState("")
    const [emotion, setEmotion] = useState<Emotion>("HAPPY")
    const [weather, setWeather] = useState<Weather>("SUNNY")


    const write = async () => {
        try {
            if(!title.trim()) {
                throw "제목을 입력해주세요."
            }

            if(!content.trim()) {
                throw "내용을 입력해주세요."
            }

            await createDiary({
            title: title.trim(),
            content: content.trim(),
            diaryDate,
            emotion,
            weather
        })

        toast.success("일기가 저장되었습니다.")
        } catch (error) {
            if(typeof error === 'string') {
                toast.error(error)
            } else {
                toast.error("일기 저장을 실패했습니다.")
            }

        }
        
    }

    return(
        <div className="p-8">
            오늘 하루 어땠나요?
            <div className="space-y-4">
                <div>
                    <div>제목</div>
                    <Input value={title} onChange={e => setTitle(e.target.value)}></Input>
                </div>
                <div>
                    <div>내용</div>
                    <Input value={content} onChange={e => setContent(e.target.value)}></Input>
                </div>
                <div>
                    <div>일자</div>
                    <Input value={diaryDate} onChange={e => setDiaryDate(e.target.value)}></Input>
                </div>
                <div>
                    <div>감정</div>
                    <Select value={emotion} onValueChange={(value: string) => setEmotion(value as Emotion)}>
                        <SelectTrigger>
                            <SelectValue placeholder="감정을 선택하세요"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                ["HAPPY", "SAD", "ANGRY", "EXCITED", "TIRED", "NOMAL"]
                                .map(item => <SelectItem key = {item} value={item}> {item}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                    </div>
                <div>
                <div>날씨</div>
                <Select value={weather} onValueChange={(value: string) => setWeather(value as Weather)}>
                    <SelectTrigger>
                        <SelectValue placeholder="날씨를 선택하세요"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            ["SUNNY", "CLOUDY", "RAINY", "SNOWY", "WINDY"]
                            .map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
            </div>
                
                <div>
                    <Button onClick={write}>저장</Button>
                </div>
            </div>
        </div>
    )
}
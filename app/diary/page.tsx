"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createDiary } from "@/lib/api/diary"
import { Emotion, Weather } from "@/types/diary"
import { useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"
import { relative } from "path"
import { cn } from "@/lib/utils"

export default function Page() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [diaryDate, setDiaryDate] = useState("")
    const [emotion, setEmotion] = useState<Emotion>("HAPPY")
    const [weather, setWeather] = useState<Weather>("SUNNY")
    const emotions = [{
        value: "HAPPY",
        text: "행복",
        image: "happy.png"
    },
    {
        value: "SAD",
        text: "슬픔",
        image: "sad.png"
    },
    {
        value: "ANGRY",
        text: "화남",
        image: "angry.png"
    },
    {
        value: "EXCITED",
        text: "신남",
        image: "excited.png"
    },
    {
        value: "TIRED",
        text: "지침",
        image: "tired.png"
    },
    {
        value: "NOMAL",
        text: "평범",
        image: "normal.png"
    } ] //"HAPPY", "SAD", "ANGRY", "EXCITED", "TIRED", "NORMAL"

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
                        
                        <div className="flex space-x-2">
                            {
                                emotions.map((item, i) =>
                                (<div key={i} className={cn(
                                    "border rounded-xl overflow-hidden p-1", 
                                    emotion === item.value && "border-primary"
                                    )} onClick={() => setEmotion(item.value as Emotion)}>
                                    <div className="relative w-20 aspect-square">
                                        <Image src={`/images/emotion/${item.image}`} fill alt={item.text}></Image>
                                    </div>
                                    <div className="text-center text-xs font-semibold">{item.text}</div>
                                    </div>)
                                )
                            }
                    </div>

                    
                    {/* <Select value={emotion} onValueChange={(value: string) => setEmotion(value as Emotion)}>
                        <SelectTrigger>
                            <SelectValue placeholder="감정을 선택하세요"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                ["HAPPY", "SAD", "ANGRY", "EXCITED", "TIRED", "NOMAL"]
                                .map(item => <SelectItem key = {item} value={item}> {item}</SelectItem>)
                            }
                        </SelectContent>
                    </Select> */}
                    
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
        </div>
    )
}
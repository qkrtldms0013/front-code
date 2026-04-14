import { CreateDiaryReqDto, Diary } from "@/types/diary";

const BASE_URL = "http://localhost:8080"

export async function createDiary(data: CreateDiaryReqDto): Promise<string> {
    const response = await fetch(`${BASE_URL}/create-diary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        throw new Error("일기 생성에 실패했습니다.")
    }

    return response.text()

}

export async function getDiaryMonthly(year: number, month: number): Promise<Diary[]> {
    const response = await fetch(`${BASE_URL}/get-diary-monthly?year=${year}&month=${month}`)

    if(!response.ok) {
        throw new Error("일기 조회에 실패했습니다.")
    }

    return response.json()
}
export type Emotion = "HAPPY" | "SAD" | "ANGRY" | "EXCITED" | "TIRED" | "NOMAL"
export type Weather = "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY" | "WINDY"

export interface CreateDiaryReqDto {
    title: string
    content: string
    diaryDate: string
    emotion: Emotion
    weather: Weather
}

export interface Diary {
    id: number 
    title: string
    content: string
    diaryDate: string
    emotion: Emotion
    weather: Weather
    updatedAt: string
}
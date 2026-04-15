import { Stock } from "@/types/stock"

const BASE_URL = "http://localhost:8080"

export async function getStockList(): Promise<Stock[]> {
    const response = await fetch(`${BASE_URL}/get-stock-list`)

    if(!response.ok) {
        throw new Error("재고 목록 조회에 실패했습니다.")
    }

    return response.json()
}
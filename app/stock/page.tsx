"use client"

import { useEffect, useState } from "react"
import { getStockList } from "@/lib/api/stock"
import { Stock } from "@/types/stock"

export default function Page() {
    const [stocks, setStocks] = useState<Stock[]>([])

    useEffect(() => {
        getStockList().then(setStocks)
    }, [])

    return (
        <div className="p-8">
            <div>
                {stocks.map(stock => (
                    <div key={stock.stockId}>
                        {stock.snackName} - {stock.storeName} - {stock.quantity}
                    </div>
                ))}
            </div>
        </div>
    )
}
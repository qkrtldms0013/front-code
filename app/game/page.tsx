"use client"
 
import {Button} from "@/components/ui/button"
import { use, useState } from "react"
 
export default function GamePage() {

  const [ nickname, setNickname ] = useState('')
  const [ pageIndex, setPageIndex ] = useState(0)
 
  const [ answer, setAnswer ] = useState(0) 
  const [ message, setMessage] = useState('')
  const [ guess, setGuess ] = useState<string | undefined>('')
 
  const startGame = () => {
    const random = Math.floor(Math.random() * 50) + 1
    setAnswer(random)
    setMessage('게임 시작!')
  }
 
  const handleUp = () => {
    const number = Number(guess)
    if (number === answer) {
      setMessage(`${answer} 정답입니다!`)
    } else if (number > answer) {
      setMessage(`${number}보다 작은 수입니다.`)
    } else if (number < answer) {
      setMessage(`${number}보다 큰 수입니다.`)
    }
  }
 
  const isCorrect = Number(guess) === answer
 
  const page0 = () => {
    return (
      <div className="p-8 space-y-4">
        {
          nickname.length > 0 ? <div> 당신의 닉네임: {nickname} </div> : <div> 당신의 닉네임을 입력하세요. </div>
        }
        
        <input className="border" placeholder="닉네임" value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        >
        </input>
        <div className="border border-slate-100 shadow-2xl rounded-2xl bg-blue-100 text-center"
          onClick={() => {
            if (nickname.length > 0) {
              setPageIndex(1)
              startGame()
            } else {
              alert('닉네임을 입력하세요')
            }
          }}
        > 다음 </div>
      </div>)
  }
 
  const page1 = () => {
    return (
      <div>
        <div className="flex">
          <div className="text-blue-300 font-bold"> {nickname} </div>님 환영합니다.
        </div>
        <div className="py-3">
          <div className="text-red-300 font-bold"> {message} </div>
        </div>
        {
          isCorrect ? (
            <div>
            <div> 정답입니다! {answer} </div>
            <Button color="blue" onClick={startGame}>재시작</Button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <input className="border" value={guess} onChange={(e) => setGuess(e.target.value)}></input>
              <Button onClick={handleUp}> 입력 </Button>
            </div>
          )
        }
      </div>
    )
  }
 
  return ( 
    <div className="p-4">
      {
        pageIndex === 0 && page0()
      }
      {
        pageIndex === 1 && page1()
      }
    </div>
  )
}
 
 
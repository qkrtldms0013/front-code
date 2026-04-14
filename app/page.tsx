"use client";

import { error } from "console";
import { useEffect } from "react";

type ButtonProps = {
  text: string;
  color?: "green" | "blue";
  onClickMyButton?: (text: string) => void;
  children?: React.ReactNode;
};

function Button({ text, color, onClickMyButton, children }: ButtonProps) {
  let style = "bg-red-600 px-4 py-2 text-center text-white rounded-xs";

  if (color === "blue") {
    style = "bg-blue-600 px-4 py-2 text-center text-white rounded-xs";
  }

  if (color === "green") {
    style = "bg-green-600 px-4 py-2 text-center text-white rounded-xs";
  }

  return (
    <div
      onClick={() => {
        if (onClickMyButton) {
          onClickMyButton(text)
        }
      }}
      className={style}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const elements: Array<ButtonProps & {status: "ROCK" | "PAPER" | "SCISSORS"}> = [
    { text: "가위", status: "SCISSORS"},
    { text: "바위", color: "blue", status: "ROCK" },
    { text: "보", color: "green", status: "PAPER" },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8080/get-lotto");
  //     const data = await res.json();

  //     console.log("data:", data);
  //   };
  //   fetchData();
  // }, []);

  // const getRandom = new Promise<number>((resolve, reject) => {
  //   setTimeout(() => {
  //     const number = parseInt(Math.random() * 100 + '');
  //     if (number % 2 === 1) {
  //       reject(number);
  //     } else {
  //       resolve(number);
  //     }
  //   }, 1000);
  // });

  /*const getRandomAsync = async () => {
    const number = parseInt(Math.random() * 100 + '');
    if (number % 2 === 1) {
        throw Error("에러입니다.")
      } else {
        return number
      }
  }

  getRandomAsync().then((value) => {
    console.log('여기는 promise then이야')
    console.log(value)
  }).catch((error) => {
    console.log('여기는 promise catch')
    console.log(error)
  })*/

  // useEffect(() => {
  //   fetch('http://localhost:8080/hello').then((res) => {
  //     console.log("http://localhost:8080/hello 호출한 reaponse:")
  //     console.log(res)

  //     res.text().then((data) => {
  //       console.log("http://localhost:8080/hello 호출한 data:")
  //       console.log(data)
  //     })
  //   })
  // }, [])

  useEffect(() => {
    }, [])

  const play = async(myStatus: "ROCK" | "PAPER" | "SCISSORS") => {
    const res = await fetch('http://localhost:8080/play-rock-paper-scissors', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        status: myStatus
      })
    })
    const data = await res.json()
    console.log(data)
    
    //setCount(count + 1)
  }
  

  return (
    <div>
      <div>가위, 바위, 보 버튼 누르면 alert로 선택한 결과 출력</div>

      <div className="p-16 border flex space-x-10">
        {elements.map((ele, index) => (
          <Button
            key={index}
            text={ele.text}
            color={ele.color}
            onClickMyButton={() => play(ele.status)}
          >
            <div>{ele.text}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
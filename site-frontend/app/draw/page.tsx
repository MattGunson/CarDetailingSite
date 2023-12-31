'use client'

import { useEffect, useState } from 'react'
import { useDraw } from '@/hooks/useDraw'
import { drawLine } from '@/lib/drawLine'
import { HexColorPicker } from "react-colorful";
import { io } from 'socket.io-client'

let pathEnv = process.env.SOCKET_SERVER
if (pathEnv === undefined) {
  pathEnv = "wss://socket.mgunsonsoftware.com"
}
const SOCKET_URL = pathEnv
console.log(SOCKET_URL)
const socket = io(SOCKET_URL, {
  extraHeaders: {
    Connection: "Upgrade",
    Upgrade: "websocket"
  }
})

interface pageProps { }

type DrawLineProps = {
  prevPoint: Point | null
  currentPoint: Point
  color: string
}

export default function Draw() {
  const [color, setColor] = useState<string>('#000')
  const { canvasRef, onMouseDown, clear } = useDraw(createLine)
  
  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    socket.emit('draw-line', { prevPoint, currentPoint, color })
    drawLine({ prevPoint, currentPoint, ctx, color })
  }

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')

    socket.emit('client-ready')

    socket.on('get-canvas-state', () => {
      if (!canvasRef.current?.toDataURL()) return
      console.log('sending canvas state')
      socket.emit('canvas-state', canvasRef.current.toDataURL())
    })

    socket.on('canvas-state-from-server', (state: string) => {
      console.log('I received the state')
      const img = new Image()
      img.src = state
      img.onload = () => {
        ctx?.drawImage(img, 0, 0)
      }
    })

    socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLineProps) => {
      if (!ctx) return console.log('no ctx here')
      drawLine({ prevPoint, currentPoint, ctx, color })
    })

    socket.on('clear', clear)

    return () => {
      socket.off('draw-line')
      socket.off('get-canvas-state')
      socket.off('canvas-state-from-server')
      socket.off('clear')
    }
  }, [canvasRef])

  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
      <div className='flex flex-col gap-10 pr-10'>

        <HexColorPicker color={color} onChange={setColor} />
        <button
          type='button'
          className='p-2 rounded-md border border-black' onClick={() => socket.emit('clear')}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  )
}
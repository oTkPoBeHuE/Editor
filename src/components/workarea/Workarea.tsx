import React, { FC, useState } from 'react'
import Image from '../image/Image'
import './Workarea.css'

const Workarea:FC = () => {

  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [items, setItems] = useState<string[]>([])

  const dragStartHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)

  }

  const dragLeaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const itemType = e.dataTransfer.getData('itemType') as string;
    setItems([...items,itemType])
    setIsDrag(false)
  }


  return (
    <div className='workarea'>
      <h2>Workarea</h2> 

       {isDrag 
        ? <div 
              className='workarea__dragged'
              onDragOver={(e) => dragStartHandler(e)}
              onDragStart={(e)=>dragStartHandler(e)}
              onDragLeave={(e)=>dragLeaveHandler(e)}
              onDrop={(e)=>dropHandler(e)}
              >
              Отпустите элемент в рабочую область
          </div>
         : 
         <>
         <p>Перетащите элемент из сайдбара в рабочую область</p>
         <div 
              className='workarea__not-dragged'
              onDragOver={(e) => dragStartHandler(e)}
              onDragStart={(e)=>dragStartHandler(e)}
              onDragLeave={(e)=>dragLeaveHandler(e)}
              >
          {items?.map(item=> 
                <div className='item'>
                  {item === 'text' ? 
                  <textarea />
                  :
                  <Image />
                  }
                </div>
          )}
           
          </div>
         </>
    }
    </div>
  )
}

export default Workarea
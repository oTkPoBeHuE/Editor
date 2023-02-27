import React, { FC } from 'react'
import './Sidebar.css'

const Sidebar:FC = () => {

  const handleOnDrag = (e: React.DragEvent, itemType: string) => {
    e.dataTransfer.setData('itemType', itemType)

  }

  return (
    <div className='sidebar'>
        <h3>Sidebar</h3>
        <div draggable onDragStart={(e)=> handleOnDrag(e, 'text')} className='sidebar__text'>Text</div>
        <div draggable onDragStart={(e)=> handleOnDrag(e, 'image')} className='sidebar__image'>Image</div>
    </div>
  )
}

export default Sidebar
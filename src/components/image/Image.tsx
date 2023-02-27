import React, { useEffect, useState, useRef, FC } from 'react'
import './Image.css'

const Image:FC = () => {
    const [selectedFile, setSelectedFile] = useState<Blob>()
    const [preview, setPreview] = useState<string>()
    const fileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const selectFileHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
           <button onClick={() => fileRef?.current?.click()}>
            <img className='uploader' src="https://supertechman.com.au/wp-content/uploads/2018/05/folder-download.png" alt="" />
            </button>
            <input type='file' onChange={selectFileHandler} ref={fileRef} hidden />
            {selectedFile &&  <img className='preview' src={preview} /> }
        </div>
    )
}

export default Image

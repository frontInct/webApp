'use client'

import { ModalRadix } from '@/shared/components/cards'
import s from './AddPhotoModal.module.scss'
import { Button } from '@/shared/components/button'
import Img from '@/shared/assets/icons/image-outline.svg'
import { useRef, useState } from 'react'
import { Input } from '@/shared/components/input'
import Image from 'next/image'

type Props = {
  open: boolean
  onClose: (open: boolean) => void
  title: string
}

export default function AddPhotoModal({ open, onClose, title }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleClearButton = () => {
    setPreviewUrl(null)
  }

  return (
    <ModalRadix
      open={open}
      onClose={onClose}
      modalTitle={title}
      size='md'
    >
      <div className={s.container}>
        <div className={s.photoContainer}>
          <div className={s.inputContainer}>
            <Input
              variant='inputDefault'
              type='file'
              accept='image/jpeg, image/png'
              onChange={handleImgChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              id='file-input'
            />
            <label htmlFor='file-input'>
              {previewUrl ? (
                <Image
                  width={222}
                  height={228}
                  src={previewUrl}
                  alt='Preview'
                  className={s.previewImage}
                />
              ) : (
                <Img />
              )}
            </label>
          </div>
        </div>
        <div className={s.buttonContainer}>
          <Button
            variant='primary'
            style={{ width: '219px', height: '36px' }}
            onClick={handleButtonClick}
          >
            Select from Computer
          </Button>
          <Button
            variant='outlined'
            style={{ width: '219px', height: '36px' }}
            onClick={handleClearButton}
          >
            Clear
          </Button>
        </div>
      </div>
    </ModalRadix>
  )
}

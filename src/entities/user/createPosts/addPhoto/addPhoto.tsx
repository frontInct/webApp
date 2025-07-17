import { ModalRadix } from '@/shared/components/cards'
import s from './addPhoto.module.scss'
import { Button } from '@/shared/components/button'
import Img from '@/shared/assets/icons/image-outline.svg'
import { useRef, useState } from 'react'
import { Input } from '@/shared/components/input'
import Image from 'next/image'

type Props = {
  open: boolean
  onClose: (open: boolean) => void
}

export default function AddPhotoModal({ open, onClose }: Props) {
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
      modalTitle='Add Photo'
      size='md'
    >
      <div className={s.container}>
        <div className={s.photoContainer}>
          <div className={s.inputContainer}>
            <Input
              variant='inputDefault'
              type='file'
              accept='image/*'
              onChange={handleImgChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              id='file-input'
            />
            <label
              htmlFor='file-input'
              style={{ cursor: 'pointer' }}
            >
              {previewUrl ? (
                <Image
                  width={222}
                  height={228}
                  src={previewUrl}
                  alt='Preview'
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

import { Maximize, Minus, X } from 'lucide-react'
import Image from 'next/image'

const TopSection = () => {
  return (
    <div className="flex items-center m-2">
        <div className="flex gap-2 ml-4 items-center">
          <Image
            src="/whatsapp-icon.svg"
            alt="Whatsapp_Logo"
            width={20}
            height={20}
          />
          <p className="text-sm">WhatsApp</p>
        </div>
      </div>
  )
}

export default TopSection
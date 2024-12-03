import { Button } from "@/components/ui/button"
import { Instagram, Phone, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from "next/link"

interface SocialButtonProps {
  type: 'whatsapp' | 'instagram' | 'phone'
  href?: string
  phone?: string
}

export function SocialButton({ type, href, phone }: SocialButtonProps) {
  if (type === 'phone') {
    return (
      <div className="flex items-center gap-2 text-white">
        <Phone className="h-5 w-5" />
        <span>{phone}</span>
      </div>
    )
  }

  return (
    <Button
      asChild
      variant="outline"
      className="bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 text-white"
    >
      <Link href={href || '#'} target="_blank" rel="noopener noreferrer">
        {type === 'whatsapp' ? (
          <>
            <WhatsApp className="mr-2 h-5 w-5" />
            WhatsApp
          </>
        ) : (
          <>
            <Instagram className="mr-2 h-5 w-5" />
            Instagram
          </>
        )}
      </Link>
    </Button>
  )
}


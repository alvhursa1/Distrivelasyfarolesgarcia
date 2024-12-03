import Image from 'next/image'
import { dancingScript } from './fonts'
import { SocialButton } from '@/components/social-button'
import { PriceCard } from '@/components/price-card'
import { CompanyLogo } from '@/components/company-logo'

export default function Home() {
  return (
    <main 
      className="min-h-screen relative overflow-hidden bg-red-600"
      style={{
        backgroundImage: 'url(/Fondo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Corner Decorations */}
      <Image
        src="/Esquina-Der.svg"
        alt="Decoración esquina superior"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-40 md:w-64 animate-fade-left"
      />
      <Image
        src="/esquina-Izq.svg"
        alt="Decoración esquina inferior"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 w-40 md:w-64 animate-fade-right"
      />

      {/* Company Logo */}
      <div className="absolute top-4 left-4 z-10">
        <CompanyLogo />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 md:py-8 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 relative">
        <div className="text-center md:text-left space-y-4 md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-white text-4xl md:text-6xl font-bold animate-fade-down">
            VENTA DE{' '}
            <span className={`${dancingScript.className} font-normal`}>
              FAROLES
            </span>
          </h1>
          <p className="text-white text-xl md:text-2xl animate-fade-up">
            Para el día de las velitas
          </p>
        </div>

        <div className="space-y-8 md:w-1/2">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/Vela.svg"
              alt="Vela decorativa"
              width={200}
              height={200}
              className="w-40 md:w-48 animate-fade"
            />
            <div className="space-y-4">
              <PriceCard />
              <SocialButton type="phone" phone="316 739 9133" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up">
            <SocialButton 
              type="whatsapp" 
              href="https://wa.link/xtijiz"
            />
            <SocialButton 
              type="instagram"
              href="https://www.instagram.com/distri_velas_y_faroles_garcia/"
            />
          </div>
        </div>
      </div>
    </main>
  )
}


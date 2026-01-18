import SplitText from '@/components/SplitText'
import Image from 'next/image'
import { ReactNode } from 'react'
import { TEXT_CONTENT } from './authConstant'

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="h-screen  lg:grid grid-cols-2">
      <div className="relative items-center-safe bg-black hidden overflow-hidden lg:block px-12">
        {/* blob start */}
        <div className="h-96 w-96 absolute top-[-10%] right-[-10%] rounded-full blur-[128px] opacity-40 mix-blend-screen bg-danger"></div>
        <div className="h-96 w-96 absolute bottom-[-10%] left-[-10%] rounded-full blur-[160px] opacity-50 mix-blend-screen bg-info"></div>
        {/* blob end */}

        {/* content start */}
        <div className=" grid grid-rows-5 h-full">
          <div className=" my-auto flex gap-3">
            <div className="border bg-white h-12 w-12 rounded-lg flex items-center-safe justify-center-safe">
              <Image
                src="/logo-4.png"
                alt="todoro-logo"
                width={480}
                height={480}
                className="w-10 h-10"
              />
            </div>
            <p className="text-white text-2xl tracking-tight font-bold my-auto">
              Todoro.
            </p>
          </div>

          <div className=" row-start-2 row-span-3  my-auto">
            <h2 className="tracking-tight leading-24 text-white mb-4 font-extrabold w-20 text-8xl">
              {TEXT_CONTENT.map((item, index) => (
                <SplitText
                  key={index}
                  text={item.text}
                  delay={item.delay}
                  className={item.color}
                  ease="elastic.out"
                />
              ))}
            </h2>
            <p className="text-muted-foreground leading-relaxed w-sm text-lg font-medium ">
              Your simple companion for daily productivity. Organize tasks and
              stay in the zone.
            </p>
          </div>

          {/* footer */}
          <div className="row-start-5 grid grid-rows-5">
            <div className="relative z-10 flex row-start-4 items-center gap-6 text-sm font-medium text-muted-foreground">
              <span>&copy; Todoro</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>Privacy</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>Terms</span>
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
      {children}
    </div>
  )
}

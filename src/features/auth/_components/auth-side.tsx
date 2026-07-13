import Image from "next/image";

import SplitText from "@/src/components/SplitText";

import AUTH_CONSTANT from "../auth.constant";

export default function AuthSide() {
  const { image, brand, splitText, description } = AUTH_CONSTANT;
  return (
    <div className="relative hidden items-center-safe overflow-hidden bg-black px-12 lg:block">
      {/* blob start */}
      <div className="bg-danger absolute top-[-10%] right-[-10%] h-96 w-96 rounded-full opacity-40 mix-blend-screen blur-[128px]"></div>
      <div className="bg-info absolute bottom-[-10%] left-[-10%] h-96 w-96 rounded-full opacity-50 mix-blend-screen blur-[160px]"></div>
      {/* blob end */}

      {/* content start */}
      <div className="grid h-full grid-rows-5">
        <div className="my-auto flex gap-3">
          <div className="flex h-8 w-8 items-center-safe justify-center-safe rounded-lg border bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              width={480}
              height={480}
              className="h-6 w-6"
            />
          </div>
          <p className="my-auto text-lg font-bold tracking-tight text-white">
            {brand}
          </p>
        </div>

        <div className="row-span-3 row-start-2 my-auto space-y-8">
          <h2 className="w-20 text-7xl leading-18 font-extrabold tracking-tight text-white">
            {splitText.map((item, index) => (
              <SplitText
                key={index}
                text={item.text}
                delay={item.delay}
                className={item.color}
                ease="elastic.out"
              />
            ))}
          </h2>
          <p className="text-muted-foreground w-sm text-lg leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* footer */}
        <div className="row-start-5 grid grid-rows-5">
          <div className="text-muted-foreground relative z-10 row-start-4 flex items-center gap-6 text-sm font-medium">
            <span>&copy; Todoro</span>
            <span className="bg-muted-foreground h-1 w-1 rounded-full"></span>
            <span>Privacy</span>
            <span className="bg-muted-foreground h-1 w-1 rounded-full"></span>
            <span>Terms</span>
          </div>
        </div>
      </div>
      {/* content end */}
    </div>
  );
}

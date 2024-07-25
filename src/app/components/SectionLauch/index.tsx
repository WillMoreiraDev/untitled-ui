import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemLauch } from "./item-lauch";

export function SectionLauch() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="w-full max-w-2xl mb-16">
          <span className="block font-semibold text-brand-700 mb-3">Launch faster</span>
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 -tracking-[0.72px] mb-5">Build something great</h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 items-center justify-between">
          <div className="w-full max-w-xl grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 xl:gap-y-16">
            <ItemLauch
              number="4,000+"
              title="Global customers"
              text="We’ve helped over 4,000 amazing global companies."
            />
            <ItemLauch
              number="600%"
              title="Return on investment"
              text="Our customers have reported an average of ~600% ROI."
            />
            <ItemLauch
              number="10k"
              title="Global downloads"
              text="Our app has been downloaded over 10k times."
            />
            <ItemLauch
              number="200+"
              title="5-star reviews"
              text="We’re proud of our 5-star rating with over 200 reviews."
            />
          </div>
          <div>
            <Image
              src="/img-lauch.jpg"
              alt="Image Lauch"
              width={560}
              height={560}
              className="max-h-60 xl:max-h-[560px]"
            />
          </div>
        </div>
      </GridContainer>
    </section>
  )
}
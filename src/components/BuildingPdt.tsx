


import * as React from "react"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

type Listing = {
  id: number
  title: string
  subtitle: string
  image: string
}

const listings: Listing[] = [
  {
    id: 1,
    subtitle: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    image: image1,
  },
  {
    id: 2,
    subtitle: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    image: image2,
  },
  {
    id: 3,
    subtitle: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    image: image3,
  },
]

const BuildingPdt = () => {
  const [api, setApi] = React.useState<any>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setSelectedIndex(api.selectedScrollSnap())

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full mt-2 md:mt-10 p-5">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-4 touch-pan-x">
          {listings.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3"
            >
              <ListingCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="-left-3 hidden sm:flex" />
        <CarouselNext className="-right-3 hidden sm:flex" />
      </Carousel>

      {/* Pagination Dots */}
      <div className="mt-4 flex justify-center md:hidden gap-2">
        {listings.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              selectedIndex === index
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ListingCard({ item }: { item: Listing }) {
  return (
    // <div className="relative h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-2xl">
    <div className="relative  overflow-hidden  rounded-2xl">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xs uppercase tracking-widest opacity-80">
          {item.subtitle}
        </p>
        <h3 className="mt-1 text-sm sm:text-base font-semibold leading-tight">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

export default BuildingPdt


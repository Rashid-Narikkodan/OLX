import { ChevronLeft,ChevronRight } from "lucide-react"
import { useState } from "react"

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex(i => (i === 0 ? images.length - 1 : i - 1))
  }

  const next = () => {
    setIndex(i => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="relative w-full h-136 bg-transparent rounded overflow-hidden">
      {/* Image */}
      <img
        src={images[index]}
        alt=""
        className="w-full h-full object-contain"
      />

      {/* Left */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute text-white left-2 top-1/2 -translate-y-1/ p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
      )}

      {/* Right */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

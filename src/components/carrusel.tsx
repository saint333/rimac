import { useEffect, useState } from "react";
import { PlanCard, PlanCardProps } from "./optionscard";

interface CarouselProps {
  planes: PlanCardProps[] | null[];
  loading: boolean;
  tipo: string;
}

const Carousel = ({ planes, loading, tipo }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % planes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [planes.length]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? planes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === planes.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden relative p-3'>
        <div
          className='flex transition-transform duration-700 ease-in-out h-600px] gap-3 md:gap-5'
          style={{ transform: `translateX(-${currentIndex * (planes.length <= 3 ? matches ? 103 : 0 : matches ? 110 : 19)}%)` }}
        >
          {planes.map((plan, index) => (
            <div key={index} className='relative w-full md:w-fit flex-shrink-0'>
              {loading ? (
                <div
                  className='min-w-[288px] w-[288px] pt-[68px] pb-[51px] px-[32px] shadow-[0_1px_24px_0_rgba(174,172,243,.251)] rounded-[24px] bg-[var(--neutrals4)] h-[600px] opacity-50'
                  key={index}
                ></div>
              ) : plan ? (
                <PlanCard key={index} {...plan} index={index} tipo={tipo} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-6 md:hidden">
      <button
        onClick={goToPrevious}
        className={`border-2 rounded-full w-[32px] min-w-[32px] h-[32px] grid place-content-center text-[12px] ${currentIndex === 0 ? 'border-[#A9AFD9] text-[#A9AFD9]' : 'border-[var(--blueberry600)] text-[var(--blueberry600)]'}`}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
      <div className=''>
        {currentIndex + 1} / {planes.length}
      </div>
      <button
        onClick={goToNext}
        className='border-2 border-[var(--blueberry600)] rounded-full w-[32px] min-w-[32px] h-[32px] grid place-content-center text-[16px] text-[var(--blueberry600)]'
      >
        &#10095;
      </button>

      </div>
    </div>
  );
};

export default Carousel;

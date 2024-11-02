import volver from "../assets/img/volver.png";
import { Link } from "react-router-dom";
import { CardOptions, PlanCardProps } from "../components/optionscard";
import { options } from "../mock/cardoptions";
import { useState } from "react";
import { PlansData } from "../services/plans";
import Carousel from "../components/carrusel";

export default function Planes() {
  document.querySelector(".header-login")?.classList.add("header");
  document.querySelector(".header-login")?.classList.remove("header-login");
  const [loading, setLoading] = useState(false);
  const [planes, setPlanes] = useState<PlanCardProps[] | null[]>([]);
  const [tipoPlan, setTipoPlan] = useState<string>("");

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    console.log("🚀 ~ handleChange ~ e:", e.target.value);
    setPlanes([null, null, null]);
    setLoading(true);
    const planes = await PlansData();
    setTimeout(() => {
      setPlanes(planes);
      setTipoPlan(e.target.value);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className='stepperHorizontal sticky top-0 z-20'>
        <div className='container'>
          <div className='flex items-center hide-for-mobile'>
            <div className='flex items-center gap-[16px] mr-[16px]'>
              <div className='rounded-full w-[24px] h-[24px] text-center text-xs grid place-content-center font-bold transition-colors duration-300 bg-[var(--blueberry600)] text-[var(--white)]'>
                1
              </div>
              <div className='text-base tracking-[.2px] transition-all duration-300 text-[var(--neutrals7)] font-bold'>
                Planes y coberturas
              </div>
            </div>
            <div className='text-lg mr-4'>---</div>
            <div className='flex items-center gap-[16px] mr-[16px] hide-for-mobile'>
              <div className='rounded-full w-[24px] h-[24px] text-center text-xs grid place-content-center font-bold transition duration-300 border border-[var(--neutrals6)] text-[var(--neutrals6)]'>
                2
              </div>
              <div className='text-base tracking-[.2px] transition-all duration-300 text-[var(--neutrals6)] opacity-75'>
                Resumen
              </div>
            </div>
          </div>
          <div className='hide-for-desktop flex items-center w-full'>
            <button
              type='button'
              className='border-2 border-[var(--blueberry600)] rounded-full w-[24px] min-w-[24px] h-[24px] grid place-content-center text-[8px] text-[var(--blueberry600)]'
            >
               &#10094;
            </button>
            <div className='flex items-center ml-[16px] w-full'>
              <div className='text-[10px] tracking-[.8px] leading-4 mr-[16px] font-black whitespace-nowrap'>
                PASO 1 DE 2
              </div>
              <div className='w-full h-[6px] rounded-[20px] bg-[var(--neutrals4)]'>
                <div className='bg-[var(--blueberry600)] h-[6px] transition-all duration-500 rounded-[20px]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='plan'>
        <div className='container'>
          <div className='content'>
            <Link to='/' className='w-fit block'>
              <img src={volver} className='mr-[8px]' alt='Volver' loading="lazy" />
            </Link>
            <div className='content__info'>
              <div className='w-full max-w-[544px] ml-auto mr-auto'>
                <h2 className='font-bold text-[40px] tracking-[-.6px] leading-[48px]'>
                  Rocío ¿Para quién deseas cotizar?
                </h2>
                <h3 className='text-[16px] tracking-[.1px] leading-7 text-[var(--neutrals7)] mt-[8px]'>
                  Selecciona la opción que se ajuste más a tus necesidades.
                </h3>
              </div>
            </div>
            <div className='planInfo !mt-[32px]'>
              {options.map((option) => (
                <CardOptions
                  key={option.id}
                  {...option}
                  onChange={handleChange}
                />
              ))}
            </div>
            {planes.length > 0 && (
              <div className='planPrice transition-opacity opacity-100 duration-500'>
                <Carousel planes={planes} loading={loading} tipo={tipoPlan} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

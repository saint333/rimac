import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authrouterProvider";

export default function Detalle() {
  const { user, resetAuthService } = useContext(AuthContext);
  document.querySelector(".header-login")?.classList.add("header");
  document.querySelector(".header-login")?.classList.remove("header-login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      resetAuthService();
    }, 10000);
  }, [resetAuthService]);

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
              <div className='rounded-full w-[24px] h-[24px] text-center text-xs grid place-content-center font-bold transition duration-300 bg-[var(--blueberry600)] text-[var(--white)]'>
                2
              </div>
              <div className='text-base tracking-[.2px] transition-all duration-300 text-[var(--neutrals7)] font-bold'>
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
                PASO 2 DE 2
              </div>
              <div className='w-full h-[6px] rounded-[20px] bg-[var(--neutrals4)]'>
                <div className='bg-[var(--blueberry600)] h-[6px] transition-all duration-500 rounded-[20px]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='summary'>
        <div className='container'>
          <div className='content'>
            <Link to='/' className='w-fit block'>
              <img
                src='./img/volver.png'
                className='mr-[8px]'
                alt='Volver'
                loading='lazy'
              />
            </Link>
            <div className='content__info'>
              <h2 className='font-bold text-[40px] tracking-[-.6px] leading-[48px]'>
                Resumen del seguro
              </h2>
            </div>
            <div className='relative'>
              {loading && (
                <div className=' absolute top-0 bottom-0 w-full shadow-[0_1px_24px_0_rgba(174,172,243,.251)] rounded-[24px] bg-[var(--neutrals4)] h-[300px] mt-6 opacity-50'></div>
              )}
              <div
                className={`content__block py-[24px] px-[32px] shadow-[0_1px_24px_0_rgba(174,172,243,.251)] rounded-[24px] ${
                  loading && "hidden"
                }`}
              >
                <div className='uppercase text-[var(--neutrals7)] text-[10px] leading-[16px] tracking-[.8px] font-black'>
                  Precios calculados para:
                </div>
                <div className='flex items-center gap-[12px] mt-[8px]'>
                  <img src='./img/familia.png' alt='familia' loading='lazy' />
                  <div className='text-xl font-black tracking-[-.2px] text-[var(--neutrals7)]'>
                    {user?.name} {user?.lastName}
                  </div>
                </div>
                <div className='w-full h-[1px] bg-[var(--neutrals4)] my-[16px]'></div>
                <div className='text-base font-black tracking-[.2px] text-[var(--neutrals7)] mt-[8px]'>
                  Responsable de pago
                </div>
                <div className='text-[14px] leading-6 tracking-[.1px] mt-[4px] text-[var(--neutrals7)]'>
                  DNI: {user?.documentNumber}
                </div>
                <div className='text-[14px] leading-6 tracking-[.1px] mt-[4px] text-[var(--neutrals7)]'>
                  Celular: {user?.phoneNumber}
                </div>
                <div className='text-base font-black tracking-[.2px] text-[var(--neutrals7)] mt-[16px]'>
                  Plan elegido
                </div>
                <div className='text-[14px] leading-6 tracking-[.1px] mt-[4px] text-[var(--neutrals7)]'>
                  {user?.plan}{" "}
                </div>
                <div className='text-[14px] leading-6 tracking-[.1px] mt-[4px] text-[var(--neutrals7)]'>
                  Costo del Plan: ${user?.price} al mes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

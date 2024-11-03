import '../style/stepper.css';

export default function Stepper({ percentage }: { percentage: number }) {
  return (
    <section className='stepperHorizontal sticky top-0 z-20 mb-4'>
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
            <div
              className={`rounded-full w-[24px] h-[24px] text-center text-xs grid place-content-center font-bold transition duration-300 border ${
                percentage == 50
                  ? "border-[var(--neutrals6)] text-[var(--neutrals6)]"
                  : "bg-[var(--blueberry600)] text-[var(--white)]"
              }`}
            >
              2
            </div>
            <div
              className={`text-base tracking-[.2px] transition-all duration-300 ${
                percentage == 50
                  ? "text-[var(--neutrals6)] opacity-75"
                  : "text-[var(--neutrals7)] font-bold"
              }`}
            >
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
              <div
                className={`bg-[var(--blueberry600)] h-[6px] transition-all duration-500 rounded-[20px] ${
                  percentage == 50 ? "w-[50%]" : "w-[100%]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

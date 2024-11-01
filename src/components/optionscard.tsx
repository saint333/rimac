import check from "../assets/img/check.png";
import plancasa from "../assets/img/plan-casa.png";
import planclinica from "../assets/img/plan-clinica.png";

interface CardOptionsProps {
  url: string;
  id: string;
  value: string;
  title: string;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardOptions: React.FC<CardOptionsProps> = ({ url, id, value, title, description, onChange }) => {
  return (
    <div className='check__label'>
      <input
        type='radio'
        id={id}
        name='price'
        hidden
        value={value}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={id} className='check__label--info'>
        <div className='check__label--box'>
          <img src={check} className='i select-none' alt='Check Box' />
        </div>
        <img src={url} className='select-none' alt='' />
        <div className='text-xl font-black tracking-[-.2px] text-[var(--neutrals7)] mt-[8px]'>
          {title}
        </div>
        <div className='text-[12px] leading-5 tracking-[.2px] mt-[8px]'>
          {description}
        </div>
      </label>
    </div>
  );
};

export interface PlanCardProps {
  name: string;
  price: string;
  description: string[];
  index?: number;
}

export const PlanCard = ({ name, price, description, index }: PlanCardProps) => (
  <div className='w-[288px] min-w-[288px] pt-[68px] pb-[51px] px-[32px] shadow-[0_1px_24px_0_rgba(174,172,243,.251)] rounded-[24px] flex flex-col relative transition-all opacity-100 duration-500 h-full'>
    {index == 1 && (
      <div className='recommended absolute top-10 text-xs text-[var(--neutrals7)] bg-[var(--aqual4)] py-0.5 px-2 rounded-md font-black tracking-[.4px]'>
        Plan recomendado
      </div>
    )}
    <div className='flex items-start justify-between'>
      <div>
        <div className='text-2xl font-black tracking-[-.2px] text-[var(--neutrals7)]'>
          {name}
        </div>
        <div className='mt-[24px] uppercase text-xs text-[var(--neutrals6)] tracking-[.6px] font-black'>
          Costo del plan
        </div>
        <div className='mt-1 text-xl font-black tracking-[-.2px] text-[var(--neutrals7)]'>
          ${price} al mes
        </div>
      </div>
      <img src={index == 1 ? planclinica : plancasa} alt={name} />
    </div>
    <div className='w-full h-[1px] bg-[var(--neutrals4)] my-[24px]'></div>
    <ul className='mb-[40px] flex flex-col gap-[24px]'>
      {description.map((feature: string, index: number) => (
        <li
          key={index}
          className='list-disc ml-[18px] text-[16px] leading-7 tracking-[.1px] text-[var(--neutrals7)]'
        >
          {feature}
        </li>
      ))}
    </ul>
    <button className='flex items-center justify-center btn font-br-sonoma-bold red undefined  mt-auto w-full font-bold'>
      Seleccionar Plan
    </button>
  </div>
);
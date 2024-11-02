import check from "../assets/img/check.png";
import plancasa from "../assets/img/plan-casa.png";
import planclinica from "../assets/img/plan-clinica.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardOptionsProps {
  url: string;
  id: string;
  value: string;
  title: string;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardOptions: React.FC<CardOptionsProps> = ({
  url,
  id,
  value,
  title,
  description,
  onChange,
}) => {
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
  tipo?: string;
}

export const PlanCard = ({
  name,
  price,
  description,
  index,
  tipo,
}: PlanCardProps) => {
  const plan = tipo == "para-alguien-mas";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/summary");
    }, 2000);
  };

  return (
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
          {plan && (
            <div className='text-sm text-[var(--neutrals6)] tracking-[-.2px] mt-1 line-through'>
              ${price} antes
            </div>
          )}
          <div className='mt-1 text-xl font-black tracking-[-.2px] text-[var(--neutrals7)]'>
            ${plan ? (Number(price) - Number(price) * 0.05).toFixed(2) : price}{" "}
            al mes
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
      <button
        className={`flex items-center justify-center btn font-br-sonoma-bold red  mt-auto !w-auto font-bold ${loading && "loading"}`}
        disabled={loading}
        onClick={handleClick}
      >
        {loading && <div className='flex items-center justify-center mr-3'>
          <div className='w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
        </div>}
        {loading ? "Cotizando ..." : "Seleccionar plan"}
      </button>
    </div>
  );
};

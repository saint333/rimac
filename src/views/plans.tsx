import { Link } from "react-router-dom";
import { CardOptions, PlanCardProps } from "../components/optionscard";
import { options } from "../mock/cardoptions";
import { useState, useContext } from "react";
import { PlansData } from "../services/plans";
import Carousel from "../components/carrusel";
import { AuthContext } from "../context/authrouterProvider";
import Stepper from "../components/stepper";
import "../style/plans.css";

export default function Planes() {
  document.querySelector(".header-login")?.classList.add("header");
  document.querySelector(".header-login")?.classList.remove("header-login");
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<PlanCardProps[]>([]);
  const [typePlan, setTypePlan] = useState<string>("");
  const { user } = useContext(AuthContext);

  const handleChange = async (value: string): Promise<void> => {
    setPlans([]);

    setLoading(true);
    const plans = await PlansData();
    const planesFilter = plans.filter(
      (plan: PlanCardProps) =>
        plan.age !== undefined && plan.age >= Number(user?.age)
    );
    setPlans(planesFilter);
    setTypePlan(value);
    setLoading(false);
  };

  return (
    <main>
      <Stepper percentage={50} />
      <section className='plan'>
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
              <div className='w-full max-w-[544px] ml-auto mr-auto'>
                <h2 className='font-bold text-[40px] tracking-[-.6px] leading-[48px]'>
                  {user?.name} ¿Para quién deseas cotizar?
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
            <div className='planPrice transition-opacity opacity-100 duration-500'>
              <Carousel plans={plans} loading={loading} type={typePlan} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

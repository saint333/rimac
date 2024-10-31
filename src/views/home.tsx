import home from "../assets/img/home.png";
import homeMovil from "../assets/img/home-movil.png";
import blurMorado from "../assets/img/blur-morado.png";
import blurMoradoMovil from "../assets/img/blur-morado-movil.png";
import blurVerde from "../assets/img/blur-verde.png";
import blurVerdeMovil from "../assets/img/blur-verde-movil.png";
import check from "../assets/img/check.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  documentType: HTMLSelectElement;
  documentNumber: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  acceptPrivacyPolicy: HTMLInputElement;
  acceptCommercialCommunications: HTMLInputElement;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [validando, setValidando] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setValidando(true);
    console.log(data);
    setTimeout(() => {
      setValidando(false);
      reset();
    }, 3000);
  }

  return (
    <main className='login'>
      <div className='container'>
        <div className='login__left select-none hide-for-mobile'>
          <img src={home} alt='portada rimac' />
        </div>
        <div className='login__right'>
          <div className='login__right--mobil'>
            <div>
              <div className='tag-promo'>Seguro Salud Flexible</div>
              <div className='info'>
                <h1 className='font-br-sonoma-bold text-[32px] leading-[40px] text-[var(--gray1)]'>
                  Creado para ti y tu familia
                </h1>
                <h2 className='font-br-sonoma-medium text-sm tracking-[.2px] mt-[8px] hide-for-mobile'>
                  Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                  nuestra asesoría. 100% online.
                </h2>
              </div>
            </div>
            <div className='hide-for-desktop login__right--mobil--img'>
              <img src={homeMovil} alt='' />
            </div>
          </div>
          <div className='w-full h-[1px] bg-[var(--gray30)] mt-6 hide-for-desktop'></div>
          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='font-br-sonoma-medium text-sm tracking-[.2px] mb-6 hide-for-desktop'>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </h2>
            <div className='inputSelect'>
              <div className={`inputSelect--select ${validando && "disabled"}`}>
                <select
                  id='documentType'
                  name='documentType'
                  {...register("documentType", { required: true })}
                  disabled={validando}
                >
                  <option value='DNI'>DNI</option>
                  <option value='RUC'>RUC</option>
                </select>
              </div>
              <div
                className={`input__login w-full ${validando && "disabled"} ${
                  errors.documentNumber && "error"
                }`}
              >
                <input
                  type='text'
                  id='document'
                  name='documentNumber'
                  placeholder=' '
                  disabled={validando}
                  maxLength={8}
                  {...register("documentNumber", {
                    required: true,
                    pattern: /^[0-9]{8}$/,
                  })}
                />
                <label htmlFor='document' className='before'>
                  <div className='paragraph font-br-sonoma-regular select-none'>
                    Nro. de documento
                  </div>
                </label>
              </div>
            </div>
            {errors.documentNumber && (
              <div className='text-[var(--red5)] text-[14px] leading-4 mt-2 mb-4'>
                *El documento ingresado no es válido
              </div>
            )}
            <div
              className={`input__login mt-4 ${validando && "disabled"} ${
                errors.phoneNumber && "error"
              }`}
            >
              <input
                type='number'
                id='cel'
                name='phoneNumber'
                placeholder=' '
                disabled={validando}
                maxLength={9}
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[0-9]{9}$/,
                })}
              />
              <label htmlFor='cel' className='before'>
                <div className='paragraph font-br-sonoma-regular select-none'>
                  Celular
                </div>
              </label>
            </div>
            {errors.phoneNumber && (
              <div className='text-[var(--red5)] text-[14px] leading-4 mt-2 mb-4'>
                *El celular ingresado no es válido
              </div>
            )}
            <div className='mt-6'>
              <label
                className={`check__label ${validando && "disabled"} ${
                  errors.acceptPrivacyPolicy && "error"
                }`}
              >
                <input
                  type='checkbox'
                  name='acceptPrivacyPolicy'
                  hidden
                  disabled={validando}
                  {...register("acceptPrivacyPolicy", { required: true })}
                />

                <div className='check__label--box'>
                  <img src={check} className='i' alt='Check Box' />
                </div>
                <div className='paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]'>
                  Acepto la Política de Privacidad
                </div>
              </label>
              <label
                className={`check__label mt-4 ${validando && "disabled"} ${
                  errors.acceptCommercialCommunications && "error"
                }`}
              >
                <input
                  type='checkbox'
                  name='acceptCommercialCommunications'
                  hidden
                  disabled={validando}
                  {...register("acceptCommercialCommunications", {
                    required: true,
                  })}
                />
                <div className='check__label--box'>
                  <img src={check} className='i' alt='Check Box' />
                </div>
                <div className='paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]'>
                  Acepto la Política Comunicaciones Comerciales
                </div>
              </label>
              <button
                type='button'
                className='mt-[12px] underline text-[12px] leading-[20px] tracking-[.1px] text-[var(--gray1)] font-br-sonoma-bold active:text-[var(--neutrals6)] cursor-pointer inline-block'
              >
                Aplican Términos y Condiciones.
              </button>
              <div className='block-btn '>
                {!validando ? (
                  <button className='flex items-center justify-center btn font-br-sonoma-bold bg-[var(--gray1)] duration-300 lg'>
                    Cotiza aqui
                  </button>
                ) : (
                  <button
                    className='flex items-center justify-center btn font-br-sonoma-bold bg-[var(--gray1)] duration-300 lg loading'
                    disabled
                  >
                    <div className='flex items-center justify-center mr-3'>
                      <div className='w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
                    </div>
                    Cotizando...
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <img
        src={blurVerde}
        className='absolute right-0 top-0 select-none hide-for-mobile'
      />
      <img
        src={blurVerdeMovil}
        className='absolute right-0 top-0 select-none hide-for-desktop'
      />
      <img
        src={blurMorado}
        className='absolute left-0 bottom-0 select-none hide-for-mobile'
      />
      <img
        src={blurMoradoMovil}
        className='absolute left-0 bottom-0 select-none hide-for-desktop'
      />
    </main>
  );
}

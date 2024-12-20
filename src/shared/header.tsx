import '../style/header.css';

export default function Header() {
  return (
    <header className='header-login'>
      <div className='header'>
        <nav className='container'>
          <div className='header__logo'>
            <img
              src='./img/logo.png'
              width='73'
              className='select-none'
              alt='logo rimac'
              height='35'
              loading='lazy'
            />
          </div>
          <div className='header__right'>
            <button
              type='button'
              className='text-xs tracking-[.2px] font-br-sonoma-medium text-[var(--gray1)] hover:underline active:text-[var(--neutrals6)] hide-for-mobile'
            >
              ¡Compra por este medio!
            </button>
            <a
              href='tel:+0114116001'
              className='flex items-center gap-x-2 text-[16px] leading-5 hover:underline active:text-[var(--neutrals6)]'
            >
              <img
                src='./img/celular.png'
                width='20'
                height='20'
                alt='icono de celular'
                loading='lazy'
              />
              <div className='font-br-sonoma-bold tracking-[.4px]'>
                (01) 411 6001
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

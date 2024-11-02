import logoFooter from '../assets/img/logo-footer.png';
import logoFooterMovil from '../assets/img/logo-footer-movil.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__left'>
          <img
            src={logoFooter}
            className='hide-for-mobile'
            width='85'
            alt='logo rimac'
            height='41'
            loading="lazy"
          />
          <img
            src={logoFooterMovil}
            className='hide-for-desktop m-auto'
            width='138'
            alt='logo rimac'
            loading="lazy"
          />
        </div>
        <div className='footer__right'>
          <div className='font-br-sonoma-regular text-[14px] leading-[18px] text-[var(--gray10)]'>
            © 2024 RIMAC Seguros y Reaseguros.
          </div>
        </div>
      </div>
    </footer>
  );
}

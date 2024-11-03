import '../style/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__left'>
          <img
            src='./img/logo-footer.png'
            className='hide-for-mobile'
            width='85'
            alt='logo rimac'
            height='41'
            loading='lazy'
          />
          <img
            src='./img/logo-footer-movil.png'
            className='hide-for-desktop m-auto'
            width='138'
            alt='logo rimac'
            loading='lazy'
            height='20'
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

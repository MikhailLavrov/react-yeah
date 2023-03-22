import c from './Logo.module.scss';
import LOGO_SRC from '../../assets/logo-textless.png';

export const Logo = () => {
  return (
    <div className={c.logo}>
      <a className={c.logo__link} href="#">
        <img width={50} src={LOGO_SRC} alt="logo" />
        <p className={c.logo__text}>
          <span className={c.logo__textPrimary}>Marabou</span>
          <span className={c.logo__textSecondary}>Dream network</span>
        </p>
      </a>
    </div>
  )
}

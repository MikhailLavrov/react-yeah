import c from './Preloader.module.css';
import LOADER_SRC from '../../../assets/preloader.gif';

let Preloader = (props) => {
  return (
    <div className={c.preloader}>
      <img src={LOADER_SRC} width={50} height={50} alt="loader"></img>
    </div>
  )
}

export default Preloader;
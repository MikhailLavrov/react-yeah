import c from './Preloader.module.css';

const LOADER_SRC = 'https://thumbs.gfycat.com/ConventionalOblongFairybluebird-max-1mb.gif';

let Preloader = (props) => {
  return (
    <div className={c.preloader}>
      <img src={LOADER_SRC} width={50} height={50} alt="loader"></img>
    </div>
  )
}

export default Preloader;
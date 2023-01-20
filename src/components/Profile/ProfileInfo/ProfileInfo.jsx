import c from './ProfileInfo.module.css';

const IMG_SRC_HEADER = 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300';
const IMG_SRC_AVATAR = 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg';

function ProfileInfo() {
  return (
    <div className={c.profileInfo}>
      <img src={IMG_SRC_HEADER} alt='#'></img>
      <div className={c.profileInfo__description}>
        <div className={c.profileInfo__ava}>
          <img src={IMG_SRC_AVATAR} alt='#'></img>
        </div>
        <div>Info / Description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;

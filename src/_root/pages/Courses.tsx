import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="explore-container">
        <div className="flex-between w-full max-w-5xl mt-16 mb-7">
          <h3 className="body-bold md:h3-bold">WEB3 Learning Page</h3>

          <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
            <p className="small-medium md:base-medium text-light-2">All</p>
            <img
              src="/assets/icons/filter.svg"
              width={20}
              height={20}
              alt="filter"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-9 w-full max-w-5xl">
          <ul className="grid-container">
            <li className="relative min-w-80 h-80">
              <Link to={`/tateC1/`} className="grid-post_link">
                <img
                  src={`https://www.blockchain-council.org/wp-content/uploads/2022/06/An-Insight-into-Web3-Technology-01.jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">freeCodeCamp.org</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/gadzhiC1/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/icO9Q1sDDF8/maxresdefault.jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.googleusercontent.com/XDA6ig1JeTk6W84g4ipe4LhkWsghnDjq1Zuod27XxRrLkthoLBC3gj_zxQcop1kSBzw3BKIj=s900-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Iman Gadzhi</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/gadzhiC2/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/9eltSONjQKM/maxresdefault.jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.googleusercontent.com/XDA6ig1JeTk6W84g4ipe4LhkWsghnDjq1Zuod27XxRrLkthoLBC3gj_zxQcop1kSBzw3BKIj=s900-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Iman Gadzhi</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/tateC2/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/CGFI7GRgyXk/maxresdefault.jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.ggpht.com/U-IFxSxFyOhO7kjhtEYLrxzlB935-V47Kvw8WRc7DPLjDcM0bfjnM-vZrIJcIb-oHK-1LAlO=s88-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Doc Williams</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/tateC3/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/jYEqoIeAoBg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOUHKP7UDdLfvTmTYBd8mCscAzMA`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                <img
                    src={"https://yt3.ggpht.com/JsfWb8OZxlbzAMzbz_p9E9j55ZHoMd-tVFZDzBeuKJf8izHT_TRfvXij7A8Tl4hnkxic4NYDrg=s88-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">thirdweb</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/gadzhiC3/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/ST6UteJtjz0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZk2vfaB3_HK2tbNfeBhCTj2FkiA`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.googleusercontent.com/XDA6ig1JeTk6W84g4ipe4LhkWsghnDjq1Zuod27XxRrLkthoLBC3gj_zxQcop1kSBzw3BKIj=s900-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Iman Gadzhi</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/tateC4/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/wHTcrmhskto/maxresdefault.jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                <img
                    src={"https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s88-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Fireship</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/hamptonC1/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/fMt3kv1vc_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu5EIJIkdSIyP3QY8djil-wpp3sQ`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://ippei.com/wp-content/uploads/2022/05/ac-hampton-photo.png"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">AC Hampton</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/nazarethC1/`} className="grid-post_link">
                <img
                  src={`https://i0.wp.com/wifihustlin.com/wp-content/uploads/nn1-min.jpeg?resize=696%2C392&ssl=1`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.googleusercontent.com/CkK3fY56189eQa8zXdtj8ZRppc0-RYgxbxMQL0kPR1mYfd-hHc-gpizHpNN9QDxmYXFEfHjf9y0=s900-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Nathan Nazareth</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/changC1/`} className="grid-post_link">
                <img
                  src={`https://i.ytimg.com/vi/qSqq5I1WtCA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAILvPsR3jigi_CMvk8hOUmxBNVDg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://yt3.ggpht.com/ytc/AIf8zZTGWD4TiIhxjVBEbHphqN2y-6y76zPqBnWBP_5shg=s68-c-k-c0x00ffffff-no-rj"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Charlie Chang</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default Courses;

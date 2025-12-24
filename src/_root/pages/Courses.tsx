import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="explore-container">
        <div className="flex-between w-full max-w-5xl mt-16 mb-7">
          <h3 className="body-bold md:h3-bold">Hustler Learning Page</h3>

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
                  src={`https://eu-images.contentstack.com/v3/assets/bltcd74acc1d0a99f3a/bltdb72464f511c94d4/629f54208eceeb5bcd099680/Untitled(13).jpg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://www.therealworld-tate.info/wp-content/uploads/2023/05/the-real-world-andrew-tate-logo.png"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Andrew Tate | Hustlers University</p>
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
                  src={`https://nypost.com/wp-content/uploads/sites/2/2022/12/tate-comp-1-1.jpg?quality=75&strip=all`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={"https://www.therealworld-tate.info/wp-content/uploads/2023/05/the-real-world-andrew-tate-logo.png"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Andrew Tate | Hustlers University</p>
                </div>
              </div>
            </li>
            <li className="relative min-w-80 h-80">
              <Link to={`/tateC3/`} className="grid-post_link">
                <img
                  src={`https://cssh.northeastern.edu/wp-content/uploads/2022/08/Andrew_Tate_1400.jpeg`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                <img
                    src={"https://www.therealworld-tate.info/wp-content/uploads/2023/05/the-real-world-andrew-tate-logo.png"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Andrew Tate | Hustlers University</p>
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
                  src={`https://i.ytimg.com/vi/xy-NQzeXhYg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmwGyCKObPpqSMofPoPMMBrs1reA`}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="grid-post_user">
                <div className="flex items-center justify-start gap-2 flex-1">
                <img
                    src={"https://www.therealworld-tate.info/wp-content/uploads/2023/05/the-real-world-andrew-tate-logo.png"}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">Andrew Tate | Hustlers University</p>
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

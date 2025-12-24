import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const ChangC1 = () => {
  const navigate = useNavigate();
  return (
    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          onClick={() => navigate("/learn/")}
          variant="ghost"
          className="shad-button_ghost"
        >
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>
      <div className="post_details-card">
        <iframe
          className="post_details-img"
          src="https://www.youtube.com/embed/qSqq5I1WtCA?si=-O7znU_Eawbm8C4R"
        ></iframe>

        <div className="post_details-info">
          <div className="flex-between w-full">
            <Link to={`/learn/`} className="flex items-center gap-3">
              <img
                src={
                  "https://yt3.ggpht.com/ytc/AIf8zZTGWD4TiIhxjVBEbHphqN2y-6y76zPqBnWBP_5shg=s68-c-k-c0x00ffffff-no-rj"
                }
                alt="creator"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              />
              <div className="flex gap-1 flex-col">
                <p className="base-medium lg:body-bold text-light-1">
                  Charlie Chang
                </p>
              </div>
            </Link>
          </div>

          <hr className="border w-full border-dark-4/80" />
          git init
          <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
            <p>5 Genius Ways to Make Money From Home (Using AI)</p>
            <ul className="flex gap-1 mt-2">
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <hr className="border w-full border-dark-4/80" />

        <h3 className="body-bold md:h3-bold w-full my-10">
          More Related Posts
        </h3>
      </div>
    </div>
  );
};

export default ChangC1;

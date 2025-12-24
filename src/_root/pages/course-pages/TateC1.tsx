import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const TateC1 = () => {
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
          src="https://www.youtube.com/embed/dPYNyvZSIN8?si=BipUs3IoRFZm-Xw8"
        ></iframe>

        <div className="post_details-info">
          <div className="flex-between w-full">
            <Link to={`/learn/`} className="flex items-center gap-3">
              <img
                src={
                  "https://www.therealworld-tate.info/wp-content/uploads/2023/05/the-real-world-andrew-tate-logo.png"
                }
                alt="creator"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              />
              <div className="flex gap-1 flex-col">
                <p className="base-medium lg:body-bold text-light-1">
                  Andrew Tate | Hustlers University
                </p>
              </div>
            </Link>
          </div>

          <hr className="border w-full border-dark-4/80" />

          <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
            <p>Andrew Tate's WARNING To You For 2024...</p>
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

export default TateC1;

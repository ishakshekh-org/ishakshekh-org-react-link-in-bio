import { github, linkedin, sushi } from "../assets/icons/index";
import ConnectLink from "../sections/ConnectLink";

const LinkCard = () => {
  return (
    <>
      <div className="flex flex-1 justify-center items-center  my-3">
        <ul className="w-full ">
          <ConnectLink
            img={github}
            src={"https://github.com/ishakshekh-org"}
            site={"GitHub"}
          />
          <ConnectLink
            img={linkedin}
            src={"https://www.linkedin.com/in/ishak-shekh-12bb94247/"}
            site={"LinkedIn"}
          />
          <ConnectLink
            img={sushi}
            src={"https://sushi-boy.vercel.app/"}
            site={"Sushi Boy"}
          />
        </ul>
      </div>
    </>
  );
};

export default LinkCard;

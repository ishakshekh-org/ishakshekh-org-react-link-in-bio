import HeadPart from "./components/HeadPart";
import LinkCard from "./components/LinkCard";
import NavPart from "./components/NavPart";

const App = () => {
  return (
    <section className="w-full min-h-screen bg-[#f2f3f9] text-[#151515]">
      <div className="w-full m-auto lg:w-[70%] h-full p-5">
        {/* header */}
        <div className="lg:max-w-[70%] sm:max-w-[80%] w-full m-auto p-5 bg-[#f2f3f9] rounded-xl  drop-shadow-2xl shadow-2xl">
          <HeadPart />
        </div>
        {/* Social Links */}
        <div className="w-full py-5 z-10  ">
          <NavPart />
        </div>

        {/* links part */}
        <div className="py-5 sm:max-w-[60%] w-full m-auto">
          <LinkCard />
        </div>
      </div>
    </section>
  );
};

export default App;

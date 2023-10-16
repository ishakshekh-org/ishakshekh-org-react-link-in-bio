const HeadPart = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col text-center gap-10">
        <div className=" rounded-full">
          <img src="/profile.jpg" alt="profile" className="rounded-full w-28 h-28 shadow-2xl " />
        </div>

        <div className="flex flex-col gap-5">
          <div className="">
            <a
              href="https://www.instagram.com/ishak_shekh_/"
              className="rounded-full border-2 bg-[#e6e9f3]  shadow-inner shadow-[#ee550e] border-none outline-none py-2 px-3"
            >
              {" "}
              @Ishak_Shekh_{" "}
            </a>
          </div>

          <p className="leading-7 capitalize text-base">
            hello everyone myself{" "}
            <span className="text-[#ee550e] text-lg font-black capitalize">
              Ishak Shekh
            </span>
            <br />
            Persuing Bachelor in Computer Applications
            <br />
            Aspiring Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadPart;

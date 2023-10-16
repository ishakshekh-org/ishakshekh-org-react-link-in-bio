const ConnectLink = ({ src, img, site }) => {
  return (
    <>
      <li className="bg-[#7b90fd] lg:max-w-[70%] w-full mx-auto flex-row p-2 text-white my-4  rounded-3xl shadow-2xl">
        <a href={src} className="flex justify-center items-center gap-10 ">
          <img
            src={img}
            alt="icons"
            width={50}
            height={50}
            className="rounded-full bg-transparent img-scale"
          />
          <p>{site}</p>
        </a>
      </li>
    </>
  );
};

export default ConnectLink;

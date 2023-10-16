const NavBar = ({ img, src }) => {
  return (
    <>
      <li className="rounded-3xl object-contain bg-[#ecebeb]  drop-shadow-xl shadow-xl  p-1">
        <a href={src} className="object-contain">
          <img
            // src={link.img}
            src={img}
            alt="Social Links"
            className="object-contain img-scale w-10"
          />
        </a>
      </li>
    </>
  );
};

export default NavBar;

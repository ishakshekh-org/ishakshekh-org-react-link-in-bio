import { data } from "../constants";
import Navbar from "../sections/Navbar";


const NavPart = () => {
  return (
    <div className="flex justify-center items-center sm:w-fit m-auto my-3 p-4 sm:px-5 bg-[#e6e9f3]  border-2 shadow-inner rounded-full ">
      <ul className="flex justify-evenly w-full sm:justify-evenly gap-3">
        {/* <>
          <Navbar img={instagram} src="https://www.instagram.com/ishak_shekh_/" />

          <Navbar
            img={facebook}
            src="https://www.facebook.com/profile.php?id=100085857733469"
          />

          <Navbar
            img={snapchat}
            src="https://www.snapchat.com/add/its_ishak90?share_id=HIfk2J1yQpU&locale=en-IN"
          />
          <Navbar
            img={twiiter}
            src="https://twitter.com/Ishak_Shekh_?t=fa_QxmMpaQknqGntVEgZww&s=09"
          />
          <Navbar
            img={spotify}
            src="https://open.spotify.com/user/31gf5qq4i4n2rtvwbar6n7ilpxk4?si=L7WLjRfDRkSQIF1i0T9Quw&nd=1"
          />
        </> */}
        {
          data.map(item => (
            <Navbar img={item.img} src={item.src} key={item} />
          ))
        }

      </ul>
    </div>
  );
};

export default NavPart;

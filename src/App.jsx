import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { AlignJustify, AlignJustifyIcon, X } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [data, setdata] = useState({});
  const [sidebar, setsidebar] = useState(false);
  useEffect(() => {
    console.log("useEffect triggered with language:", language);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gathserver.onrender.com/lang/${language}`
        );
        setdata(response.data[0]);
        console.log(response.data[0]);
      } catch (e) {
        console.log("Error fetching data:", e);
      }
    };
    fetchData();
  }, [language]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center h-full min-h-screen w-full">
      <div className="fixed top-0 -z-10 left-0 bg-[url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg')] bg-cover bg-center bg-fixed md:h-[100vh] h-1000 w-full"></div>
      <div className="flex flex-row w-[75%] h-full">
      <div className="flex items-center justify-start h-full pt-4 w-auto">
  <a href="https://online.123fakturera.se/" className="hidden lg:block">
    <img
      src="https://storage.123fakturera.se/public/icons/diamond.png"
      className="p-3 w-auto h-auto max-h-[60px]"
      alt="logo"
    />
  </a>
  <div className="relative block lg:hidden pt-4">
    <AlignJustifyIcon color="white" onClick={() => setsidebar(!sidebar)}/>
    {sidebar && <div
  className={`flex flex-col gap-y-4 absolute h-auto w-40 rounded-lg py-2 bg-white transition-all duration-300 ease-in-out transform ${
    sidebar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
  }`}
>


    <a href="#" className="hover:text-gray-300 px-4">
              {data.head1 || "Home"}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head2}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head3}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head4}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head5}
            </a>
    </div>}
  </div>
</div>


        <div className="flex flex-row justify-end items-center h-24 w-full gap-12 text-white font-semibold pr-2">
          <div className="lg:block hidden">
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head1 || "Home"}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head2}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head3}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head4}
            </a>
            <a href="#" className="hover:text-gray-300 px-4">
              {data.head5}
            </a>
          </div>
          <div className=" relative">
            <div
              className="flex flex-row h-full w-auto items-center hover:cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {language === "en" ? (
                <div className="flex items-center gap-2">
                  English
                  <img
                    src="https://storage.123fakturere.no/public/flags/GB.png"
                    className="h-6 w-8"
                    alt="UK flag"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Svenska
                  <img
                    src="https://storage.123fakturere.no/public/flags/SE.png"
                    className="h-6 w-8"
                    alt="Swedish flag"
                  />
                </div>
              )}
            </div>

            {open && (
              <div className="flex flex-col absolute w-[160%] h-auto bg-gray-100 text-black mt-2 font-semibold rounded-lg py-1 z-10">
                <div
                  className="flex flex-row h-12 items-center justify-center rounded-t-lg w-full py-1 hover:cursor-pointer gap-4 hover:bg-gray-300"
                  onClick={() => handleLanguageChange("sv")}
                >
                  <p>Svenska</p>
                  <img
                    src="https://storage.123fakturere.no/public/flags/SE.png"
                    className="h-4 w-8"
                    alt="Swedish flag"
                  />
                </div>
                <div
                  className="flex flex-row h-12 items-center justify-center rounded-b-lg w-full py-1 hover:cursor-pointer gap-4 hover:bg-gray-300"
                  onClick={() => handleLanguageChange("en")}
                >
                  <p>English</p>
                  <img
                    src="https://storage.123fakturere.no/public/flags/GB.png"
                    className="h-4 w-8"
                    alt="UK flag"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-white text-3xl font-bold mb-8">{data.title}</div>

      <button className="flex justify-center items-center mb-12 font-semibold hover:cursor-pointer text-white h-14 rounded-full w-70 bg-green-600 hover:bg-green-700 transition-colors">
        {data.button}
      </button>

      <div className="h-auto bg-gray-100 text-stone-600 xl:w-[50%] w-[90%] p-12 rounded-3xl mb-8">
        <div className="text-center">
          <div className="flex flex-col items-center inline">
            <div className="flex inline flex-row">
              <p className="inline">
                <span className="font-bold">{data.para1}</span>
                {data.para2}
              </p>
            </div>
            <p>{data.para3}</p>
            <p>{data.para4}</p>
            <br />
            <p>{data.para5}</p>
            <p>{data.para6}</p>
            <br />
            <p>{data.para7}</p>
            <p>{data.para8}</p>
            <p>{data.para9}</p>
            <p>{data.para10}</p>
            <p>{data.para11}</p>
            <p>{data.para12}</p>
            <p>{data.para13}</p>
            <p>{data.para14}</p>
            <p>{data.para15}</p>
            <p>{data.para16}</p>
            <p>{data.para17}</p>
            <p>{data.para18}</p>
            <p>{data.para19}</p>
            <p className="inline">
              {data.para20}{" "}
              <a
                href="javascript:Utils.popupWindow('/us')"
                className="w-10 text-sky-500"
              >
                {data.para21}
              </a>
              {data.para22}
            </p>
            <p>{data.para23}</p>
            <p>{data.para24}</p>
          </div>
        </div>
      </div>

      <button className="flex justify-center items-center mb-12 font-semibold hover:cursor-pointer text-white h-14 rounded-full w-70 bg-green-600 hover:bg-green-700 transition-colors">
        {data.button}
      </button>
    </div>
  );
}

export default App;

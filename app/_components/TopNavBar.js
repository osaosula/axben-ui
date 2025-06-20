import AnimatedBall from "./AnimatedBall";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export default function TopNavbar() {
  const signInBallsConfig = [
    {
      color: "#E5C8C8",
      width: 30,
      height: 30,
      top: -10,
      right: -10,
      delay: 0.2,
    },
    {
      color: "#F7BCE9",
      width: 54,
      height: 33,
      top: 15,
      right: -20,
      delay: 0.4,
    },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Trade", path: "/trade" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Calendar", path: "/calendar" },
  ];

  return (
    <div className="w-full h-[9hv] fixed top-0 left-0 z-50 backdrop-blur-md bg-[#F0EFFD]/50">
      <div className="w-[97%] mx-auto px-4">
        <div className="flex items-center justify-between h-[71px]">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Axben Logo"
              width="42"
              height="40"
              className="object-contain"
              loading="eager"
              fetchPriority="high"
            />
            <span className="ml-2 text-[13.5px] text-black">Axben</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className=" text-[13.5px] h-[70px] w-[100px] flex items-center justify-center text-gray-900 hover:text-[#B3AEF5] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative">
            <div className="w-[123px] h-[71px] relative">
              <AnimatedBall
                color="#E5C8C8"
                width={30}
                height={30}
                top={8}
                left={70}
                delay={0.2}
              />
              <AnimatedBall
                color="#F7BCE9"
                width={54}
                height={33}
                top={25}
                left={59}
                delay={0.4}
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[99px] h-[45px] bg-white/50 backdrop-blur-xl rounded-[30px] flex items-center justify-center gap-[10px] text-black text-[13.5px]">
                <Image
                  src={logo}
                  alt="Logo"
                  width="22"
                  height="24"
                  className="object-contain"
                />
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full z-50 shadow-xl "
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 mdLgap-6">
          <Link href="/" className="cursor-pointer hover:!text-primary-300">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rentiful Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                RENT


                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>


        </div>

      <p className="text-primary-200 hidden md:block">
        Discover your perfect rental apartments with our advanced search
      </p>
<div className="flex items-center gap-5">
   <Link href="/signin">
<Button variant="outline" className="text-whte border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg">
  Sign In
</Button>
   </Link>

  <Link href="/signup">
    <Button variant="secondary" className="text-whte  bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg">
      Sign Up
    </Button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default Navbar;

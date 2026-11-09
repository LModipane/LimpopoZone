import Image from "next/image";
import slide from "../assets/slideShow";

export default function Home() {
   return (
      <main className="bg-gray-300 h-full w-full ">
         <header>
            {/* Nav Bar */}
            <nav className="flex shrink-0 items-center gap-2.5 border-b-3 border-b-[#cc0000] bg-[#0d0d0d] p-3.5">
               <div className="text-[19px] font-black tracking-[0.5px] leading-none text-white mr-auto">
                  <span style={{ color: "#cc0000" }}>LIMP</span>
                  <span style={{ color: "#fff" }}>ZONE</span>
               </div>
               <button className="flex shrink-0 justify-center items-center bg-[#cc0000] border-none rounded-md py-1.5 px-2.25 mr-1.5 whitespace-nowrap cursor-pointer">
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#fff"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="11" cy="11" r="7"></circle>
                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
               </button>
               <button className="shrink-0 text-[10px] text-[#ff4444] font-extrabold bg-none border-[#cc0000] border py-1 rounded-md px-2.25 mr-2 leading-none whitespace-nowrap cursor-pointer">
                  ⚙ ADMIN
               </button>
               <button className="flex items-center justify-center background-none border-[#FFFFFF3F] rounded-md py-1.5 px-2 cursor-pointer">
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#fff"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  >
                     <line x1="3" y1="6" x2="21" y2="6"></line>
                     <line x1="3" y1="12" x2="21" y2="12"></line>
                     <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
               </button>
            </nav>
            {/* Slide Show */}
            <div className="">
               <div className="relative w-full h-75">
                  <Image src={slide[0]} alt="Slide Show" fill className="object-cover object-center" />
               </div>
            </div>
         </header>
      </main>
   );
}

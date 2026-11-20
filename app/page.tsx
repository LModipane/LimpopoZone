import Link from "next/link";
import slides from "../assets/slideShow";
import { SlideShow } from "../components/index";

type ExploreOption = {
   title: string;
   description: string;
   gradient: string;
};

const ExploreOptions: ExploreOption[] = [
   { title: "Best Players", description: "Top talent across the league", gradient: "from-[#111B4D] to-[#202C65]" },
   { title: "Latest Rank", description: "Stay updated with teams & players", gradient: "from-[#A33312] to-[#B13E1A]" },
   { title: "News", description: "Stay updated with the latest happenings", gradient: "from-[#6022B9] to-[#702BCB]" },
   { title: "Fan Zone", description: "Engage with the community and share your passion", gradient: "from-[#08634E] to-[#14755F]" },
];

export default function Home() {
   return (
      <main className="bg-gray-200 h-full w-full overflow-x-hidden">
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
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <line x1="3" y1="6" x2="21" y2="6"></line>
                     <line x1="3" y1="12" x2="21" y2="12"></line>
                     <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
               </button>
            </nav>
            {/* Slide Show */}
            <div className="">
               <SlideShow slides={slides} />
            </div>
         </header>
         {/* Explore section */}
         <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Explore</h2>
            <p>Welcome to the explore section!</p>
            <div className="flex flex-wrap gap-4 mt-4">
               {ExploreOptions.map((option, index) => (
                  <ExploreCard key={index} {...option} />
               ))}
            </div>
         </section>
         {/* Competitions */}
         <section className="w-full">
            {/* Province Header */}
            <div className="relative mb-[14px] overflow-hidden rounded-[14px] bg-[#CC0000] px-4 pb-[14px] pt-4">
               {/* Decorative circle */}
               <span aria-hidden="true" className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full bg-white/[0.08]" />
               <div className="relative z-10">
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px] text-white/65">Limpopo, South Africa</p>

                  <h2 className="text-xl font-black leading-tight text-white">Limpopo Football</h2>

                  <p className="mt-[3px] text-[10px] text-white/60">
                     {5} competition
                     {/* {5 !== 1 ? "s" : ""} */}
                  </p>
               </div>
            </div>

            {/* Competition Cards */}
            <div className="flex flex-col gap-2">
               <button
                  type="button"
                  className="group flex w-full min-w-0 items-center gap-2.5 rounded-xl border border-[#EEEEEE] bg-white px-[14px] py-3 text-left shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-shadow duration-150 hover:shadow-[0_4px_14px_rgba(0,0,0,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
               >
                  {/* Competition Information */}
                  <span className="min-w-0 flex-1">
                     <span className="block truncate text-[13px] font-bold text-[#111111]">bob</span>
                  </span>

                  {/* Navigation Indicator */}
                  <span
                     aria-hidden="true"
                     className="
                  shrink-0 text-base text-[#DDDDDD]
                  transition-transform duration-150
                  group-hover:translate-x-0.5
                "
                  >
                     &rarr; {/** Replace with lucide icon */}
                  </span>
               </button>
            </div>
         </section>
      </main>
   );
}

const ExploreCard = ({ title, description, gradient }: ExploreOption) => {
   return (
      <Link
         href="#"
         className={`
              group relative isolate flex min-h-[112px] min-w-[500px]
              flex-col justify-between gap-3 overflow-hidden
              rounded-[20px] border-0 p-5 pb-4 text-left
              bg-gradient-to-br ${gradient}
              shadow-[0_8px_20px_rgba(17,27,77,0.16)] hover:shadow-[0_12px_24px_rgba(17,27,77,0.28)]
              cursor-pointer
              transition-all duration-200 ease-out
              hover:-translate-y-[3px]
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
              motion-reduce:transform-none
              motion-reduce:transition-none
            `}
      >
         {/* Decorative circles */}
         <span
            aria-hidden="true"
            className="
                pointer-events-none absolute -right-[18px] -top-[18px]
                -z-10 h-[88px] w-[88px] rounded-full
                bg-white/[0.09]
              "
         />

         <span
            aria-hidden="true"
            className="
                pointer-events-none absolute -bottom-6 -left-3
                -z-10 h-[70px] w-[70px] rounded-full
                bg-white/[0.06]
              "
         />

         {/* Card content */}
         <span className="relative z-10 flex-1">
            <span
               className="
                mb-1 block text-5xl font-black tracking-[0.2px]
                text-white
              "
            >
               {title}
            </span>

            <span
               className="
                block text-lg font-medium leading-relaxed
                text-white/70
              "
            >
               {description}
            </span>
         </span>

         {/* Navigation indicator */}
         <span className="relative z-10 flex justify-end">
            <span
               aria-hidden="true"
               className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full bg-white/[0.22]
                  text-[20px] font-bold leading-none text-white
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                "
            >
               &rarr; {/** Replace with lucide icon */}
            </span>
         </span>
      </Link>
   );
};

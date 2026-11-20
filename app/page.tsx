import Link from "next/link";
import slides from "../assets/slideShow";
import { SlideShow } from "../components/index";

type ExploreOption = {
   title: string;
   gradient: string;
   description: string;
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
         <footer className="relative -mx-[14px] -mb-[10px] mt-8 overflow-hidden rounded-t-[20px] bg-gradient-to-b from-[#0d1117] to-[#060910]">
            {/* Top accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#CC0000] via-50% to-transparent" />
            <div className="px-[22px] pb-[26px] pt-[30px]">
               {/* Brand */}
               <div className="mb-[26px] text-center">
                  <div className="mb-2 inline-flex items-baseline gap-px font-[Arial,sans-serif] text-[26px] font-black tracking-[0.5px]">
                     <span className="text-white">LIMP</span>
                     <span className="text-[#CC0000]">ZONE</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-[3px] text-[#374151]">Your Local Football Hub</p>
               </div>

               {/* Divider with dot */}
               <div className="mb-5 flex items-center gap-2.5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1f2937]" />
                  <span className="h-[5px] w-[5px] rounded-full bg-[#CC0000]" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1f2937] to-transparent " />
               </div>

               {/* Quick Navigation */}
               <nav
                  aria-label="Footer navigation"
                  className="
            mb-[26px] flex flex-wrap
            justify-center gap-[7px]
          "
               >
                  {/* {navLinks.map((link) => (
                     <button
                        key={link.id}
                        type="button"
                        className="
                rounded-lg border border-[#1f2937]
                bg-[#111827] px-[13px] py-[7px]
                text-[10px] font-semibold text-[#9ca3af]
                transition-all duration-150
                hover:border-[#CC0000]
                hover:bg-[#1a0000]
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#CC0000]
              "
                     >
                        {link.label}
                     </button>
                  ))} */}
               </nav>

               {/* Action Buttons */}
               <div className="mb-[26px] flex flex-col items-center gap-3">
                  {/* Club Manager */}
                  <button
                     type="button"
                     className="rounded-[10px] bg-white px-[38px] py-[13px] text-center text-sm font-black tracking-[0.4px] text-[#CC0000] shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-opacity duration-150 hover:opacity-[0.88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC0000]"
                  >
                     Club Manager
                  </button>

                  {/* Update the Game */}
                  <button
                     type="button"
                     className="rounded-[10px] border-[1.5px] border-white bg-black px-[30px] py-[10px] text-center text-xs font-extrabold tracking-[0.4px] text-white transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                     Update the Game
                  </button>
               </div>

               {/* Social Media - only rendered when links exist */}
               {/* {hasSocialLinks && (
                  <div className="mb-[26px]">
                     <p className="mb-[14px] text-center text-[8px] uppercase tracking-[2.5px] text-[#374151]">Follow Us</p>

                     <div className="flex justify-center gap-2.5">
                        {Object.entries(socialLinks)
                           .filter(([, url]) => url.trim() !== "")
                           .map(([platform, url]) => (
                              <a
                                 key={platform}
                                 href={url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label={platform}
                                 className="
                      flex h-9 w-9 items-center
                      justify-center rounded-[10px]
                      border border-[#2d2d2d]
                      bg-[#111827] text-white
                      transition-transform duration-150
                      hover:-translate-y-0.5
                    "
                              >
                                 {platform}
                              </a>
                           ))}
                     </div>
                  </div>
               )} */}

               {/* Bottom Divider */}
               <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#1f2937] to-transparent" />

               {/* Copyright */}
               <div className="text-center">
                  <p className="text-[10px] text-[#374151]">
                     © 2025/26 <span className="font-bold text-[#CC0000]">Limp</span>
                     <span className="font-bold text-[#e5e5e5]">Zone</span> · All rights reserved
                  </p>

                  <p className="mt-[5px] text-[9px] tracking-[0.5px] text-[#1f2937]">Built for local football</p>
               </div>
            </div>
         </footer>
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

// import HeroForm from "@/components/forms/HeroForm";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <>
//       {session ? (
//         <div>
//           hii
//         </div>
//       ) : (
//         <main className="px-4 md:px-6">
//           <section className="pt-16 md:pt-24 lg:pt-32 flex flex-col items-start">
//             <div className="max-w-md mb-6 md:mb-8">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
//                 Your one link <br className="hidden sm:block" />for everything
//               </h1>
//               <h2 className="text-gray-500 text-lg sm:text-xl mt-4 md:mt-6">
//                 Share your links, profiles, contact info and more on one page
//               </h2>
//             </div>
//             <div className="w-full max-w-md">
//               <HeroForm user={session?.user} />
//             </div>
//           </section>
//         </main>
//       )}
//     </>
//   );
// }

import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div>
          hii
        </div>
      ) : (
        <main className="px-4 md:px-6 flex items-center justify-center">
          <section className="pt-16 md:pt-24 lg:pt-32">
            <div className="max-w-md mx-auto mb-6 md:mb-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Your one link <br className="hidden sm:block" />for everything
              </h1>
              <h2 className="text-gray-500 text-lg sm:text-xl mt-4 md:mt-6">
                Share your links, profiles, contact info and more on one page
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <HeroForm user={session?.user} />
            </div>
          </section>
        </main>

      )}
    </>
  );
}
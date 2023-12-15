import Footer from "@/components/Footer"
import Level from "@/components/Level"

export default function Home() {
  return (
    <>
      <main className="flex flex-col sm:px-20 md:px-48 lg:px-64 xl:px-[25rem] min-h-screen items-center justify-center w-full px-2 text-center">
        <div className="h-[500px] px-2 w-full maindiv mb-4">
          <h1 className="md:text-6xl text-3xl my-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-blue-300 to-blue-100 tracking-tight text-center ">
            Guess the Number
          </h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg font-semibold tracking-wide text-blue-100 ">
              Select&nbsp; Level&nbsp; to&nbsp; start&nbsp; the&nbsp; game
            </h1>
            <Level />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

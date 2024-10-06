import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className=" bg-sky-100 bg-dotted-pattern bg-contain py-5 md:py-10 2xl:bg-slate-500">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>

            <Button size='lg' asChild className="button w-full sm:w-fit">
              <Link href="#explore">Explore Now</Link>
            </Button>
          </div>
          <Image src="/assets/images/hero.png" alt='hero' width={1000} height={1000} className="max-h-[75vh] object-center object-contain 2xl:max-h-[50vh]" />
        </div>
      </section>

      {/* Events Section */}

      <section className="wrapper flex flex-col gap-8 md:gap-12">

        <h2 className="h2-bold">Trusted By <br /> Thousands Of  Events  </h2>
        <div className="flex flex-col gap-5 w-full md:flex-row">
          {/* <h1 className="bg-black w-full">Search</h1> */}
          <Input></Input>
          <h1 className="bg-sky-500 w-full">Catogary</h1>
        </div>

      </section>

    </>
  );
}

import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-[66vh]">
        <div className="relative h-[66vh]" >
          <Image
            className="z-0"
            src="/porscheHandWash.jpg"
            alt="porsche hand wash"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="centered-relative text-white text-center text-2xl z-1">
            <h1>When you look good</h1>
            <h1>You feel good</h1>
            <Link className="btn normal-case text-xl z-1 m-4" href="/schedule">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center h-[66vh] sm:flex-row sm:h-[33vh]">
        <div className="bg-slate-300 flex-1 relative h-[33vh] m-2">
          <Image
            className="z-0"
            src="/carInterior.jpg"
            alt="car interior"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="centered-relative text-white text-center text-2xl z-1">
            <h1>This is the content for the interior window</h1>
            <h1>pop out window for details</h1>
          </div>
        </div>
        <div className="bg-slate-500 flex-1 relative h-[33vh] m-2">
          <Image
            className="z-0"
            src="/carExteriorPorsche.jpg"
            alt="car exterior"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="centered-relative text-white text-center text-2xl z-1">
            <h1>This is the content for the exterior window</h1>
            <h1>pop out window for details</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

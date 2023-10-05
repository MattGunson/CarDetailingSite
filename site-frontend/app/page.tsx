import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex-col min-h-screen">
        <div className="min-w-fit min-h-fit">
          <Image
            className="object-none"
            src="/porscheHandWash.jpg"
            alt="porsche hand wash"
            // fill={true}
            width={1000}
            height={1000}
          />
        </div>
        <a href="https://github.com/MattGunson/CarDetailingSite">GitHub.com</a>
        <div> Some overlay things go in here </div>
      </div>
      <div>
        {" "}
        {/* this is the second window, it will contain content for the interior and exterior detailing windows */}
        <div>
          <div>pop out window for details</div>
          <div>This is the content for the interior window</div>
        </div>
        <div>
          <div>This is the content for the exterior window</div>
          <div>pop out window for details</div>
        </div>
      </div>
    </main>
  );
}

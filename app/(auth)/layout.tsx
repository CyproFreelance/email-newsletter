import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <section className="flex flex-1 justify-center items-center flex-col py-10 bg-a-2">
          {children}
        </section>

        <Image
          width={500}
          height={900}
          src="/side-img.svg"
          alt=""
          className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      </div>
    </>
  );
}

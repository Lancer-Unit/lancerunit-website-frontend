import Image from "next/image";
import banner from "../../assets/laptop-2665794.jpg";

export default function HeroParallax() {
  return (
    <div
      className="h-screen flex flex-col md:flex-row items-center justify-around w-full overflow-hidden px-8"
      id="home"
    >
      <div className="md:w-1/2">
        <Image
          src={banner}
          alt="home page"
          layout="responsive"
          width={500}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-center items-start md:w-1/2 lg:ml-10">
        <h1 className="text-2xl md:text-8xl font-bold dark:text-black bg-opacity-50 p-2 rounded-md">
          The Ultimate <br /> Freelancing Solution
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-black bg-opacity-50 p-2 rounded-md">
          We provide freelancers an opportunity to grow and earn some bucks at
          the same time. We are a team of passionate developers and designers
          that love to build amazing products.
        </p>
      </div>
    </div>
  );
}

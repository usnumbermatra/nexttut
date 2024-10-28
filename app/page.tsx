import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/vip.module.css";
import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <Image
        src="/hero-desktop.png"
        alt="Screenshots of the dashboard project showing desktop version"
        width={1000}
        height={500}
        className="hidden md:block"
      />
      <Image
        src="/hero-mobile.png"
        alt="Screenshots of the dashboard project showing desktop version"
        width={640}
        height={320}
        className="block md:hidden"
      />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            {/* <h1 className="text-blue-500">I'm Blue</h1>
            <h2 className="text-green-500">I'm Green</h2>
            <h3 className="text-red-500">I'm Red</h3>
            <h4 className="text-yellow-500">I'm Yello</h4>
            <h4 className="bg-blue-500 text-white">I'm Other</h4> */}
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}

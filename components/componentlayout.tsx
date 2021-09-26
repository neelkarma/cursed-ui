import { FC } from "react";
import BaseLayout from "./baselayout";
import Head from "./head";
import Link from "next/link";

const ComponentLayout: FC<{ title: string }> = ({ children, title }) => {
  return (
    <BaseLayout>
      <Head title={`${title} | Cursed UI`} />
      <div className="mt-8 mb-2">
        <Link href="/">
          <a className="transition-colors duration-200 ease-out hover:bg-gray-200 active:bg-gray-300 text-gray-500 hover:text-gray-800 active:text-gray-800 p-4 rounded-lg">
            Go Home
          </a>
        </Link>
      </div>
      <h1 className="font-sans text-4xl font-bold pb-3 pt-5">{title}</h1>
      {children}
    </BaseLayout>
  );
};

export default ComponentLayout;

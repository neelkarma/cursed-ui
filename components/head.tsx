import { FC } from "react";
import NextHead from "next/head";

const Head: FC<{
  title: string;
}> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
);

export default Head;

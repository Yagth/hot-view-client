import Head from "next/head";

interface IProps {
  title: string;
}

export function Header({ title }: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/hot-news-logo.png" type="image" />
      </Head>
    </>
  );
}

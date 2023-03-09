import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import LoaderPage from "@/components/LoaderPage";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import { classnames } from "@/utils/classnames";
import { createTheme, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";

import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#86efac",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#27272a",
        },
      },
    },
  },
});
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Angel Martinez</title>
        <meta name="description" content="Smart Development for Smart Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/ico.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <LoaderPage open={loading} />
        <div
          className={classnames(
            loading ? "opacity-0" : "opacity-1",
            "bg-neutral-900 w-full text-slate-100"
          )}
        >
          <Header />
          <main>
            <Main />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

import Head from "next/head";
import { Container, Typography, Link, CssBaseline } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {
  return (
    <>
      <Head>
        <title>OCIA - St Thomas Aquinas Cathedral</title>
        <meta name="description" content="OCIA - St Thomas Aquinas Cathedral" />
      </Head>
      <DefaultTemplate>
        test
      </DefaultTemplate>
    </>
  );
}

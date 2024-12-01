import Head from "next/head";
import { Container, Typography, Link, CssBaseline, Grid2 } from "@mui/material";
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
        <Grid2 container>
          <Grid2 size={12}>
            <Typography variant="h4" gutterBottom>
              Welcome to OCIA
            </Typography>
            <Typography variant="body1" gutterBottom>
              The purpose of this website is to provide educational material for the Order of Christian Initiation of Adults (OCIA). It is meant to ensure those who are preparing for the sacraments of Initiation are well prepared.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The material is based on the Catechism of the Catholic Church, the Bible, and the teachings of the Church. The hope for this website is to ensure that there is always accessibility to all of the material, regardless of the location of the user or resources available.
            </Typography>
          </Grid2>
        </Grid2>
      </DefaultTemplate>
    </>
  );
}

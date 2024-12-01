import Head from "next/head";
import { useState } from "react";
import { Container, CssBaseline, AppBar, Toolbar, Drawer, IconButton, Typography, List, ListItem, ListItemText, Link, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/Home.module.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function DefaultTemplate({ children }: any) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OCIA | The Order of Christian Initiation of Adults
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
            width: { xs: '100%', sm: 240 },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: { xs: '100%', sm: 240 },
            boxSizing: 'border-box',
          },
        }}
      >
        <div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
            Menu
          </Typography>
          <List>
            <ListItem component={Link} href="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} href="/bible">
              <ListItemText primary="The Catholic Bible" />
            </ListItem>
            <ListItem component={Link} href="/checklist">
              <ListItemText primary="Checklist" />
            </ListItem>
            <ListItem component={Link} href="/education-material">
              <ListItemText primary="Education Material" />
            </ListItem>
          </List>
          </div>
        </Drawer>
      </Box>
      <Container className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <footer className={styles.footer}>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link href="https://www.mathisonprojects.com/" target="_blank" rel="noopener noreferrer" underline="hover">
              Created by Mathison Projects Inc
            </Link>
            {" | "}
            <Link href="https://www.stacathedral.com/" target="_blank" rel="noopener noreferrer" underline="hover">
              Created in support of OCIA for St Thomas Aquinas Cathedral
            </Link>
            <br />
            <Link href="/privacy-policy" underline="hover" rel="noopener noreferrer">Privacy Policy</Link>
            {" | "}
            <Link href="/terms-and-conditions" underline="hover" rel="noopener noreferrer">Terms and Conditions</Link>
          </Typography>
        </footer>
      </Container>
    </>
  );
}

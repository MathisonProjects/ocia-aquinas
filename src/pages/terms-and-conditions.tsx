import Head from "next/head";
import { Container, Typography, CssBaseline } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - OCIA</title>
        <meta name="description" content="Terms and Conditions of OCIA - St Thomas Aquinas Cathedral" />
      </Head>
      <DefaultTemplate>
        <Container>
          <Typography variant="h4" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the OCIA Terms and Conditions page. These terms and conditions outline the rules and regulations for the use of OCIA's website.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use the OCIA website if you do not agree to all of the terms and conditions stated on this page.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We employ the use of cookies. By accessing the OCIA website, you agreed to use cookies in agreement with the OCIA's Privacy Policy.
          </Typography>
          <Typography variant="h5" gutterBottom>
            License
          </Typography>
          <Typography variant="body1" paragraph>
            Unless otherwise stated, OCIA and/or its licensors own the intellectual property rights for all material on the OCIA website. All intellectual property rights are reserved. You may access this from the OCIA website for your own personal use subjected to restrictions set in these terms and conditions.
          </Typography>
          <Typography variant="h5" gutterBottom>
            User Comments
          </Typography>
          <Typography variant="body1" paragraph>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. OCIA does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of OCIA, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Hyperlinking to our Content
          </Typography>
          <Typography variant="body1" paragraph>
            The following organizations may link to our website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and System-wide Accredited Businesses.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Content Liability
          </Typography>
          <Typography variant="body1" paragraph>
            We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Reservation of Rights
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Removal of links from our website
          </Typography>
          <Typography variant="body1" paragraph>
            If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
          </Typography>
        </Container>
      </DefaultTemplate>
    </>
  );
}

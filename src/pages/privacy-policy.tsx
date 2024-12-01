import Head from "next/head";
import { Container, Typography, CssBaseline } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - OCIA</title>
        <meta name="description" content="Privacy Policy of OCIA - St Thomas Aquinas Cathedral" />
      </Head>
      <DefaultTemplate>
        <Container>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the OCIA Privacy Policy page. Your privacy is critically important to us.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We only collect information about you if we have a reason to do so – for example, to provide our services, to communicate with you, or to make our services better.
          </Typography>
          <Typography variant="h5" gutterBottom>
            How We Use Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect in various ways, including to provide and maintain our services, to notify you about changes to our services, and to provide customer support.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Sharing Information
          </Typography>
          <Typography variant="body1" paragraph>
            We do not share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Security
          </Typography>
          <Typography variant="body1" paragraph>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at info@stacathedral.com.
          </Typography>
        </Container>
      </DefaultTemplate>
    </>
  );
}

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <SpeedInsights/>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          {/*<Footer />*/}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
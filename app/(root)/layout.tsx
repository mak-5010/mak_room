import StreamVideoProvider from "@/providers/StreamClientProviders";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MAK Room",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;

"use client";

import { useState } from "react";
import { Clipboard, ClipboardCheck, ContactIcon, MailOpen } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3">
        <ContactIcon size={24} />

        <h2 className="text-lg font-medium md:text-xl">Get in Touch</h2>
      </div>

      <Card
        className="group cursor-pointer rounded-2xl bg-emerald-200 bg-right bg-no-repeat p-2 text-black transition-all duration-1000 animate-in slide-in-from-bottom-full"
        style={{ backgroundImage: "url('/images/bg-gradient-2.svg')" }}
        onClick={() => handleEmailClick(siteConfig.author.mail)}
      >
        <CardHeader className="space-y-3">
          <div className="flex justify-between">
            <MailOpen />

            {isCopied ? (
              <ClipboardCheck className="-my-3 -mr-2 h-6 w-6" />
            ) : (
              <Clipboard className="-my-3 -mr-2 h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}
          </div>

          <div className="text-lg font-medium md:text-xl">Drop Me an Email</div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-col text-lg md:flex-row md:items-center md:gap-2">
            <span className="underline-offset-8 group-hover:underline">
              {siteConfig.author.mail}
            </span>

            {isCopied && (
              <span className="duration-500 animate-in slide-in-from-right-full">
                (Copied!)
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed md:text-base">
            Expect my rapid and eager reply - your message won&apos;t be kept
            waiting!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

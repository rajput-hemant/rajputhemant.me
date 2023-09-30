"use client";

import { useState } from "react";
import { Contact2, MailOpen } from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState("");

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);

    setTimeout(() => {
      setCopiedEmail("");
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3">
        <Contact2 size={24} />

        <h2 className="text-lg font-medium md:text-xl">Get in Touch</h2>
      </div>

      <div
        className="cursor-pointer space-y-5 rounded-2xl border bg-green-200 bg-right bg-no-repeat p-8 text-neutral-900 transition-all duration-1000 animate-in slide-in-from-bottom-full"
        style={{ backgroundImage: "url('/images/bg-gradient-2.svg')" }}
      >
        <MailOpen size={24} className="text-neutral-800" />
        <div className="space-y-3">
          <div className="text-lg font-medium md:text-xl">Drop Me an Email</div>
          <div
            className="text-lg text-neutral-800 hover:underline md:text-lg"
            onClick={() => handleEmailClick("aulianza.dev@gmail.com")}
          >
            {copiedEmail ? "Copied!" : "aulianza.dev@gmail.com"}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
          Expect my rapid and eager reply - your message won&apos;t be kept
          waiting!
        </p>
      </div>
    </div>
  );
};

export default Contact;

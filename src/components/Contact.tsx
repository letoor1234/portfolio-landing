import {
  BriefcaseIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PaperClipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import MailDialog from "./MailDialog";
import ResumeDialog from "./ResumeDialog";

const Contact = () => {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center pt-24"
    >
      <MailDialog open={isMailOpen} onClose={() => setIsMailOpen(false)} />
      <ResumeDialog
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <h2 className="font-bold uppercase text-2xl">
        Get in <span className="text-emerald-400">touch!</span>
      </h2>
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-center gap-8 w-4/6 lg:w-1/2">
          <Button onClick={() => setIsMailOpen(true)}>
            <span className="flex gap-2 items-center justify-center">
              Email
              <EnvelopeIcon className="w-6" />
            </span>
          </Button>

          <ButtonLink
            href="https://wa.me/5493492614784"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex gap-2 items-center justify-center">
              Whatsapp
              <DevicePhoneMobileIcon className="w-6" />
            </span>
          </ButtonLink>
          <Button onClick={() => setIsResumeOpen(true)}>
            <span className="flex gap-2 items-center justify-center">
              My Resume
              <PaperClipIcon className="w-6" />
            </span>
          </Button>
          <ButtonLink
            href="https://github.com/letoor1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex gap-2 items-center justify-center">
              GitHub
              <CodeBracketIcon className="w-6" />
            </span>
          </ButtonLink>
          <ButtonLink
            href="https://www.linkedin.com/in/angel-martinez-wb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex gap-2 items-center justify-center">
              LinkedIn
              <UserGroupIcon className="w-6" />
            </span>
          </ButtonLink>
          <ButtonLink
            href="https://www.upwork.com/freelancers/~013bf46934c7da9e16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex gap-2 items-center justify-center">
              UpWork
              <BriefcaseIcon className="w-6" />
            </span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;

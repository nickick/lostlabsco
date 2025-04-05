import Link from "next/link";
import { QRCodeForURI } from "./QRCode";
import { IoLogoWhatsapp } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { amplitude } from "./AnalyticsProvider";

export const WAQRCodeChip = ({ inModal = false }: { inModal?: boolean }) => {
  return (
    <div
      className={cn(
        "flex md:flex-row gap-2 md:items-center justify-center md:gap-2 pt-4",
        inModal && "flex-col items-start gap-0"
      )}
    >
      <div className="flex items-center gap-2">Join our secret</div>
      <div className="flex items-center gap-2">
        <Link
          href="https://chat.whatsapp.com/JxiNsxdjzLxByHsg0JhFN1"
          target="_blank"
          className="flex items-center gap-2 bg-[#23D366] text-white rounded-md p-2 cursor-pointer hover:bg-[#23D366]/90 transition-colors duration-300"
          onClick={() => {
            amplitude.track("WhatsApp QR Code Clicked");
          }}
        >
          WhatsApp <IoLogoWhatsapp className="w-6 h-6" />
        </Link>
        <div className="w-1/2 h-auto max-w-16 bg-white rounded-md p-2">
          <QRCodeForURI
            uri="https://chat.whatsapp.com/JxiNsxdjzLxByHsg0JhFN1"
            size={256}
            bgColor="#ffffff"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

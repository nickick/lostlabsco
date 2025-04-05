import Link from "next/link";
import { QRCodeForURI } from "./QRCode";
import { IoLogoWhatsapp } from "react-icons/io5";

export const WAQRCodeChip = () => {
  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <div className="flex items-center gap-2">
        Join our secret
        <Link
          href="https://chat.whatsapp.com/JxiNsxdjzLxByHsg0JhFN1"
          target="_blank"
          className="flex items-center gap-2 bg-[#23D366] text-white rounded-md p-2 cursor-pointer hover:bg-[#23D366]/90 transition-colors duration-300"
        >
          WhatsApp <IoLogoWhatsapp className="w-6 h-6" />
        </Link>
      </div>
      <div className="w-1/2 h-auto max-w-16 bg-white rounded-md p-2">
        <QRCodeForURI
          uri="https://chat.whatsapp.com/JxiNsxdjzLxByHsg0JhFN1"
          size={256}
          bgColor="#ffffff"
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

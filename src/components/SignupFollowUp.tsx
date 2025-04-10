import Link from "next/link";
import { WAQRCodeChip } from "./WAQRCodeChip";

const SignupFollowUp = ({ showProductLink }: { showProductLink?: boolean }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <WAQRCodeChip />
      <div className="pt-4">
        Want to{" "}
        <Link
          href="/submit"
          target="_blank"
          className="underline text-(--accent) hover:text-(--accent)/90 transition-colors duration-300"
        >
          design a logo
        </Link>{" "}
        with us next?
      </div>
      {showProductLink && (
        <Link
          href="/product"
          className="underline text-(--accent) hover:text-(--accent)/90 transition-colors duration-300 mt-8"
        >
          Check out our product!
        </Link>
      )}
    </div>
  );
};

export { SignupFollowUp };

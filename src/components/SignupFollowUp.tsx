import Link from "next/link";
import { WAQRCodeChip } from "./WAQRCodeChip";

const SignupFollowUp = () => {
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
    </div>
  );
};

export default SignupFollowUp;

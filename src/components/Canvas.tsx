import { Trash, Undo, Send } from "lucide-react";
import { Component, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { ChromePicker } from "react-color";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import { Spinner } from "./Spinner";
import { SubmitLogoModal } from "./SubmitLogoModal";

declare module "react-canvas-draw" {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  export default class CanvasDraw extends Component<any> {
    undo(): void;
    eraseAll(): void;
    getDataURL(
      fileType: string,
      useBgImage: boolean,
      backgroundColor: string
    ): string;
  }
}

const Canvas = () => {
  const [color, setColor] = useState("#000000");
  const { width } = useWindowSize();
  const canvasSize = width ? width - 50 : 400;
  const canvasRef = useRef<CanvasDraw>(null);

  const [signedEmail] = useLocalStorage("signed-up-email", "");
  const [signedName] = useLocalStorage("signed-up-name", "");

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.eraseAll();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          image: canvasRef.current?.getDataURL("png", false, "#ffffff"),
          email: signedEmail,
          name: signedName,
        }),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const submitButton = (
    <button className="flex gap-2 items-center bg-(--accent) text-black px-4 py-2 rounded-md">
      Submit {isLoading ? <Spinner className="w-4 h-4" /> : <Send />}
    </button>
  );

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="mx-4">
        <CanvasDraw
          ref={canvasRef}
          hideInterface={false}
          hideGrid={true}
          brushColor={color}
          height={canvasSize}
          width={canvasSize}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <button onClick={handleUndo}>
              <Undo />
            </button>
            <button onClick={handleClear}>
              <Trash />
            </button>
          </div>
          <SubmitLogoModal button={submitButton} onSubmit={handleSubmit} />
        </div>
        <ChromePicker
          onChangeComplete={(color) => {
            console.log(color);
            setColor(color.hex);
          }}
          color={color}
        />
      </div>
    </div>
  );
};

export { Canvas };

import { Trash, Undo, Send, BrushIcon } from "lucide-react";
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

const CanvasButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="cursor-pointer border w-8 h-8 flex items-center justify-center rounded-full hover:drop-shadow-[0_0_2px_var(--accent)] transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const Canvas = () => {
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(12);
  const { width } = useWindowSize();
  const canvasSize = Math.min(width ? width - 30 : 360, 400);
  const canvasRef = useRef<CanvasDraw>(null);

  const [signedEmail] = useLocalStorage("signed-up-email", "");
  const [signedName] = useLocalStorage("signed-up-name", "");
  const [submitted, setSubmitted] = useState(false);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.eraseAll();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (!signedEmail || !signedName) {
        return;
      }
      await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          image: canvasRef.current?.getDataURL("png", false, "#ffffff"),
          email: signedEmail,
          name: signedName,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBrushLarge = () => {
    setBrushSize(12);
  };

  const handleBrushSmall = () => {
    setBrushSize(4);
  };

  const [isLoading, setIsLoading] = useState(false);

  const submitButton = (
    <button
      disabled={isLoading || submitted}
      className="flex gap-2 items-center bg-(--accent) text-black px-4 py-2 rounded-md disabled:bg-gray-500"
    >
      {submitted ? (
        "Submitted!"
      ) : isLoading ? (
        <>
          Submitting... <Spinner className="w-4 h-4" />
        </>
      ) : (
        <>
          Submit <Send />
        </>
      )}
    </button>
  );

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="w-full max-w-md relative flex flex-col justify-center items-center">
        <div className="w-full text-center text-sm text-gray-200 md:hidden">
          Color picker below
        </div>
        <CanvasDraw
          ref={canvasRef}
          hideInterface={false}
          hideGrid={true}
          brushColor={color}
          brushRadius={brushSize}
          canvasHeight={canvasSize}
          canvasWidth={canvasSize}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-between gap-2 px-2">
            <CanvasButton onClick={handleBrushLarge}>
              <BrushIcon className="w-6 h-6" />
            </CanvasButton>
            <CanvasButton onClick={handleBrushSmall}>
              <BrushIcon className="w-3 h-3" />
            </CanvasButton>
            <CanvasButton onClick={handleUndo}>
              <Undo className="w-4 h-4" />
            </CanvasButton>
            <CanvasButton onClick={handleClear}>
              <Trash className="w-4 h-4" />
            </CanvasButton>
          </div>
        </div>
        <div className="flex md:flex-col gap-4 pt-4 md:pt-0">
          <ChromePicker
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
            color={color}
          />
          <SubmitLogoModal button={submitButton} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export { Canvas };

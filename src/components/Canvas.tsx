import { Trash, Undo } from "lucide-react";
import { Component, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { ChromePicker } from "react-color";
import { useWindowSize } from "usehooks-ts";

declare module "react-canvas-draw" {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  export default class CanvasDraw extends Component<any> {
    undo(): void;
    clear(): void;
  }
}

const Canvas = () => {
  const [color, setColor] = useState("#000000");
  const { width } = useWindowSize();
  const canvasSize = width - 50 || 300;
  const canvasRef = useRef<CanvasDraw>(null);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
      <CanvasDraw
        ref={canvasRef}
        hideInterface={false}
        hideGrid={true}
        brushColor={color}
        height={canvasSize}
        width={canvasSize}
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <button onClick={handleUndo}>
            <Undo />
          </button>
          <button onClick={handleClear}>
            <Trash />
          </button>
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

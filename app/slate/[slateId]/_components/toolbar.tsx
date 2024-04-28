import React from "react";

const Toolbar: React.FC = (): JSX.Element => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div className="tool">Pencil</div>
        <div className="tool">Square</div>
        <div className="tool">Circle</div>
        <div className="tool">Square</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div className="tool">Undo</div>
        <div className="tool">Redo</div>
      </div>
    </div>
  );
};

export default Toolbar;

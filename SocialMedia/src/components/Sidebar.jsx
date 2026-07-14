import React from "react";
import Button from "./Button";
import { Plus, House } from "lucide-react";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-5 col-span-2 row-span-10 px-15 py-8">
        <Button
          content={<Plus size={20} />}
          width={90}
          height={80}
          context={"New"}
        />
        <p className="flex gap-2">
          <House size={20} />
          Home
        </p>
      </div>
    </>
  );
}

export default Sidebar;

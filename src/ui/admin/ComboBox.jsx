import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

function ComboBox({ items, onChange, placeholder, value, disabled }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          disabled={disabled}
          role="combobox"
          aria-expanded={open}
          className="w-full flex justify-between items-center border p-2 rounded"
        >
          {value || placeholder || "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={4}
          className="w-full p-0 border rounded-md bg-white"
        >
          <div className="p-2">
            <input
              type="text"
              placeholder={placeholder || "Search..."}
              className="w-full p-2 mb-2 border-b focus:outline-none"
            />

            <ul className="max-h-40 overflow-y-auto">
              {items.map((item) => (
                <li
                  key={item.value}
                  onClick={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  className={`cursor-pointer p-2 rounded ${
                    value === item.value
                      ? "bg-gray-400 text-black"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {value === item.value && (
                    <Check className="inline-block mr-2 h-4 w-4" />
                  )}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default ComboBox;

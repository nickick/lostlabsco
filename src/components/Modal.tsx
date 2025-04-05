"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { X } from "lucide-react";

const Modal = ({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-80">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded bg-black p-8 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export { Modal };

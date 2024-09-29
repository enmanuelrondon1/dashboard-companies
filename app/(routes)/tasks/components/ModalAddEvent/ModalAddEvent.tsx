"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ModalAddEventProps } from "./ModalAddEvent.types";
import { FormEvent } from "../FormEvent";

export const ModalAddEvent = (props: ModalAddEventProps) => {
  const { companies, open, setNewEvent, setOpen, setOnSaveNewEvent } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-[425px] ">
        <DialogHeader>
          <DialogTitle>Add a new event</DialogTitle>
        </DialogHeader>
        <FormEvent
          setOnSaveNewEvent={setOnSaveNewEvent}
          companies={companies}
          setOpen={setOpen}
          setNewEvent={setNewEvent}
        />
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormContact } from "./FormContact";

export const NewContact = () => {
  const [open, SetOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={SetOpen}>
      <DialogTrigger asChild>
        <Button>Add a new contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]: ">
        <DialogHeader>
          <DialogTitle>Add a new contact</DialogTitle>
          <DialogDescription>
            Create your contacts to managethem later
          </DialogDescription>
        </DialogHeader>
        <FormContact setOpen={SetOpen} />
      </DialogContent>
    </Dialog>
  );
};

"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export default function DashboardTownhallFilter() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <InputGroup className="w-40 bg-white shadow-md">
          <InputGroupInput
            type="number"
            placeholder="..."
            onChange={(e) => console.log(e.target.valueAsNumber)}
          />
          <InputGroupAddon align="inline-start">TH</InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-md hover:bg-white"
          onClick={() => console.log("reset")}
        >
          <X />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}

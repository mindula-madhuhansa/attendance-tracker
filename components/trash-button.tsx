import { Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TrashButon() {
  return (
    <Button variant="destructive" size="icon">
      <Trash2Icon />
    </Button>
  );
}

"use client";

import { Draggable } from "@hello-pangea/dnd";
import type { CardSelect } from "~/server/db/schema";
import { useAtom } from "jotai";

import { onOpenAtom } from "~/hooks/use-card-modal"; // Adjust the path as necessary

type CardItemProps = {
  data: CardSelect;
  index: number;
};

export default function CardItem({ data, index }: CardItemProps) {
  const [, onOpen] = useAtom(onOpenAtom);

  return (
    <Draggable draggableId={String(data.id)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => onOpen(data.id)}
          className="truncate rounded-md border-2 border-transparent bg-primary-foreground px-3 py-2 text-sm shadow-sm hover:border-background"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
}

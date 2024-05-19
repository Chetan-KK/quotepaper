// src/components/CustomDraggable.tsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface CustomDraggableProps extends Partial<DraggableProps> {
  childClassName?: string;
}

const CustomDraggable = forwardRef<HTMLDivElement, CustomDraggableProps>(
  ({ childClassName, ...props }, ref) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => nodeRef.current as HTMLDivElement);

    return (
      <Draggable nodeRef={nodeRef} {...props}>
        <div ref={nodeRef} className={childClassName}>
          {props.children}
        </div>
      </Draggable>
    );
  }
);

export default CustomDraggable;

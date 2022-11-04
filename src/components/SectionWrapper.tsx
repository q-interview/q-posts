import React, { FC, ReactElement, ReactNode } from "react";
import ConsoleLog from "./ConsoleLog";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
}): ReactElement => {
  return (
    <ConsoleLog componentName={SectionWrapper.name}>
      <section className="p-4 mx-auto max-w-7xl space-y-3 flexCenter flex-col textColor">
        {children}
      </section>
    </ConsoleLog>
  );
};

export default SectionWrapper;

import React, { FC, ReactElement, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
}): ReactElement => {
  return (
    <section className="p-4 mx-auto max-w-7xl space-y-3 flexCenter flex-col textColor">
      {children}
    </section>
  );
};

export default SectionWrapper;

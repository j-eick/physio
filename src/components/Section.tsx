import { ReactNode } from "react";

/**
 * @title string    - title can be undefined
 * @value ReactNode - ReactNode doesn't cover null/undefined.
 *                    To do so, use React.ReactNode instead.
 */
type SectionProps = {
  title?: string;
  children: ReactNode;
};

// export const Section: (React.FC<{ title: string }> = ({ children, title }: SectionProps) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// });

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

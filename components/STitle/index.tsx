import { SText, type STextProps } from "../SText";

export type STitleProps = STextProps;

export const STitle = ({ typography = "body.medium", children, ...props }: STextProps) => {
  return <SText typography="title.large" mt={4} {...props}>
    {children}
  </SText>
};
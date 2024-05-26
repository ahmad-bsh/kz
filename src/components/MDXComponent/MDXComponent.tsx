import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};

export interface MDXProps {
  code: string;
}

const MDXComponent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponent;

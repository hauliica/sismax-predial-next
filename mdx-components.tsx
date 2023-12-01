import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl mb-4 lg:text-5xl scroll-m-20 leading-10 uppercase pr-12 bg-blend-overlay font-black tracking-tight text-gray-900/95">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h1 className="scroll-m-20 mb-6 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h1>
    ),
    p: ({children}) => <p className="py-4 px-8">{children}</p>,
    ...components,
  };
}

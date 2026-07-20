import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type InternalLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

/**
 * Avoid background route fetches for links that a visitor may never open.
 * This is especially important on content-heavy pages with large footers.
 */
export default function InternalLink({ children, ...props }: InternalLinkProps) {
  return (
    <NextLink {...props} prefetch={false}>
      {children}
    </NextLink>
  );
}

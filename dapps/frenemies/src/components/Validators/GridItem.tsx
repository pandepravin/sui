// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import clsx from "clsx";
import { ReactNode } from "react";

export function GridItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx("grid", className)}
      style={{
        gridTemplateColumns:
          "minmax(100px, 1fr) minmax(100px, 2fr) minmax(min-content, 5fr) minmax(min-content, 2fr)",
      }}
    >
      {children}
    </div>
  );
}

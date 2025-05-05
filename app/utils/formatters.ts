"use client";

import { State } from "../types";

export const formatHTML = (data: State): string => {
  const itemsHTML = data.items.map((item) => `<div class="item">${item.text}</div>`).join("\n  ");

  return `<div class="container">
  ${itemsHTML}
</div>`;
};

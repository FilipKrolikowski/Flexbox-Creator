"use client";

export function camelToDash(str: string) {
  return str.replace(/([A-Z])/g, (val) => `-${val.toLowerCase()}`);
}

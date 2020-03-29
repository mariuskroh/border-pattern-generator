import { canvas } from "./globals";

export default function clearPattern() {
  return (canvas.innerHTML = "");
}

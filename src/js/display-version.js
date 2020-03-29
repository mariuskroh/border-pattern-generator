import { title } from "./globals.js";
import packageJson from "../../package.json";

export default function displayVersion() {
  return (title.innerHTML = `Border Pattern Generator ${packageJson.version}`);
}

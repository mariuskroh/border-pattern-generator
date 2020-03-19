import { title } from "./globals.js";
import packageJson from "../../package.json";

const displayVersion = function() {
  return (title.innerHTML = `Border Pattern Generator ${packageJson.version}`);
};

export default displayVersion;

import { Log } from "@/config/utils/someUtils"; // This breaks
// import { Log } from "./utils/someUtils"; // This works

export function doSomeConfigStuff() {
  Log("Doing some config stuff");
}

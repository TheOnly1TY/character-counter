import { Theme } from "./Theme";
import { Logo } from "./Logo";

export function Nav() {
  return <nav className="flex justify-between items-center">
    <Logo />
    <Theme />
  </nav>;
}

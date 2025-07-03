import { memo } from "react";

function CheckIcon() {
  return <div className="">{"\u2713"}</div>;
}

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };

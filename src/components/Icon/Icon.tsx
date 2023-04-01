import Card from "./card.svg";
import Checked from "./checked.svg";
import Cupom from "./cupom.svg";
import Location from "./location.svg";
import MailSent from "./mailSent.svg";
import Money from "./money.svg";
import RigthArrow from "./rightarrow.svg";
import Dots from "./dots.svg";
import Edit from "./edit.svg";
import Delete from "./delete.svg";

type Props = {
  color: string;
  icon: string;
  width: number;
  height: number;
};

export const Icon = ({ color, icon, width, height }: Props) => {
  return (
    <div style={{ width, height }}>
      {icon === "card" && <Card color={color} />}
      {icon === "checked" && <Checked color={color} />}
      {icon === "cupom" && <Cupom color={color} />}
      {icon === "location" && <Location color={color} />}
      {icon === "mailSent" && <MailSent color={color} />}
      {icon === "money" && <Money color={color} />}
      {icon === "rightarrow" && <RigthArrow color={color} />}
      {icon === "dots" && <Dots color={color} />}
      {icon === "edit" && <Edit color={color} />}
      {icon === "delete" && <Delete color={color} />}
    </div>
  );
};

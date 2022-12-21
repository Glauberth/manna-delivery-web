import MailSent from "./mailSent.svg";

type Props = {
  color: string;
  icon: string;
  width: number;
  height: number;
};

export const Icon = ({ color, icon, width, height }: Props) => {
  return (
    <div style={{ width, height }}>
      {icon === "mailSent" && <MailSent color={color} />}
    </div>
  );
};

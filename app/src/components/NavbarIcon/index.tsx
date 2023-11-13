type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
};
export default function NavbarIcon({ onClick, isOpen }: Props) {
  return (
    <div
      className={`icon nav-icon-8 ${isOpen ? "open" : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

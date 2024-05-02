interface Props {
  checked: boolean;
  onAdmin(): void;
}

function Toggle({ checked, onAdmin }: Props) {
  return (
    <input
      type="checkbox"
      className="toggle toggle-primary"
      checked={checked}
      onChange={onAdmin}
    />
  );
}

export default Toggle;

type SelectProps = {
  label: string;
  name: string;
  value: string;
  onClick: () => void;
  onChange: (e: any) => void;
  classBoolean: boolean;
  children: React.ReactNode;
  disabled: boolean;
};

export default function Select({ label, name, value, onClick, onChange, classBoolean, children, disabled }: SelectProps) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <select
        name={name}
        id={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
        className={
          classBoolean
            ? "w-full rounded border-2 border-red-300 px-4 py-2 outline-none focus:border-tailwindBlue"
            : `w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue ${disabled && "cursor-not-allowed"}`
        }
        disabled={disabled}
      >
        {children}
      </select>
    </label>
  );
}

type InputNumberProps = {
  label: string;
  name: string;
  value: number;
  onClick: () => void;
  onChange: (e: any) => void;
  classBoolean: boolean;
  disabled: boolean;
};

export default function InputNumber({ label, name, value, onClick, onChange, classBoolean, disabled }: InputNumberProps) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <input
        type="number"
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
      />
    </label>
  );
}

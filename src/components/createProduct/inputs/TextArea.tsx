type TextAreaProps = {
  label: string;
  name: string;
  value: string;
  onClick: () => void;
  onChange: (e: any) => void;
  cols: number;
  rows: number;
  classBoolean: boolean;
  disabled: boolean;
};

export default function TextArea({ label, name, value, onClick, onChange, rows, cols, classBoolean, disabled }: TextAreaProps) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <textarea
        name={name}
        id={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
        rows={rows}
        cols={cols}
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

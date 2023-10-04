type InputText = {
  label: string;
  name: string;
  value: string;
  onClick: () => void;
  onChange: (e: any) => void;
  classBoolean: boolean;
};

export default function InputText({ label, name, value, onClick, onChange, classBoolean }: InputText) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
        className={
          classBoolean
            ? "w-full rounded border-2 border-red-300 px-4 py-2 outline-none focus:border-tailwindBlue"
            : "w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue"
        }
      />
    </label>
  );
}

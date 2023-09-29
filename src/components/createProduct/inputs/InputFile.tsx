type InputFile = {
  label: string;
  name: string;
  accept: string;
  onClick: () => void;
  onChange: (e: any) => void;
  classBoolean: boolean;
};

export default function InputFile({ label, name, accept, onClick, onChange, classBoolean }: InputFile) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <input
        type="file"
        name={name}
        id={name}
        accept={accept}
        onClick={onClick}
        onChange={onChange}
        className={
          classBoolean
            ? "w-full rounded border-2 border-red-300 px-4 py-2 outline-none focus:border-tailwindBlue"
            : "w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue"
        }
        disabled
      />
    </label>
  );
}

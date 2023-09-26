type InputRadio = {
  label: string;
  name: string;
  id: string;
  onClick: () => void;
};

export default function InputRadio({ label, name, id, onClick }: InputRadio) {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name={name}
        id={id}
        value={label}
        onClick={onClick}
        className="mr-2 h-4 w-4 border-gray-400 bg-gray-100 text-tailwindBlue focus:ring-2 focus:ring-tailwindBlue"
      />
      <span>{label}</span>
    </label>
  );
}

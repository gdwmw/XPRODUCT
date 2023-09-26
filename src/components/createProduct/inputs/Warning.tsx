type Warning = {
  label: string;
  displayBoolean: boolean;
};

export default function Warning({ label, displayBoolean }: Warning) {
  return (
    <p className="text-red-400" style={{ display: displayBoolean ? "block" : "none" }}>
      {label}
    </p>
  );
}

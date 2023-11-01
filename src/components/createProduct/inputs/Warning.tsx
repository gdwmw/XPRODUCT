type WarningProps = {
  label: string;
  displayBoolean: boolean;
};

export default function Warning({ label, displayBoolean }: WarningProps) {
  return (
    <p className="text-red-400" style={{ display: displayBoolean ? "block" : "none" }}>
      {label}
    </p>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <input
    value={value}
    onChange={(event) => onChange(event.target.value)}
    placeholder="Buscar campeão..."
    className="h-11 w-full rounded-md border border-line bg-night/70 px-4 text-sm text-slate-100 outline-none transition focus:border-blueTeam"
  />
);

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <input
    value={value}
    onChange={(event) => onChange(event.target.value)}
    placeholder="Buscar campeão..."
    className="h-9 w-full border border-[#333] bg-[#050505] px-3 text-xs text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-gold/70"
  />
);

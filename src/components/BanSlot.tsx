import type { Champion } from "../types/Champion";
import { getChampionImageUrl } from "../services/championAssetService";
import { useSettingsStore } from "../store/useSettingsStore";

type BanSlotProps = {
  champion?: Champion;
};

export const BanSlot = ({ champion }: BanSlotProps) => {
  const patchVersion = useSettingsStore((state) => state.patchVersion);
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-[#303030] bg-black px-1 text-xs">
      {champion ? (
        <>
          <img src={getChampionImageUrl(champion.name, patchVersion)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale" />
          <span className="relative max-w-full truncate text-[8px] font-bold uppercase text-red-100">{champion.name}</span>
        </>
      ) : (
        <span className="text-[8px] font-bold tracking-wider text-slate-700">BAN</span>
      )}
    </div>
  );
};

import { Slider } from "@/components/ui/slider";
import { ICONS } from "@/constants/icons";
import { useRouter } from "next/navigation";

const UserPlan = () => {
  return (
    <div className="w-full my-3 p-3 bg-a-4 rounded hover:shadow-xl cursor-pointer">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">Plan</h5>
        <div className="w-[95px] shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-a-3">
          <span className="text-white text-xl">{ICONS.electric}</span>
          <span className="text-white text-sm">Upgrade</span>
        </div>
      </div>
      <h5 className="text-a-3 py-2">Total subscribers</h5>
      <Slider
        aria-label="Player progress"
        defaultValue={[1]}
        className="max-w-md"
      />
      <h6 className="text-[#831743] py-2">0 of 1000 added</h6>
    </div>
  );
};

export default UserPlan;

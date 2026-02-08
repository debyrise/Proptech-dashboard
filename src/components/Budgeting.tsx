import { Calculator, SlidersHorizontal, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

type BudgetingProps = {
  onClose: () => void;
};

const Budgeting = ({ onClose }: BudgetingProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center sm:items-center justify-center bg-black/60 p-2  sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-[80%] max-w-sm sm:max-w-md overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top dark section */}
        <div className="relative h-28 sm:h-40 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/20">
              <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-4 sm:p-6">
          <Feature
            title="Set up annual budgets by account category"
            desc="Allocate funds across income and expense lines with full visibility."
            icon={<SlidersHorizontal className="h-4 w-4" />}
          />
          <Feature
            title="Track actuals vs budget in real time"
            desc="See how your community is performing against plan, month by month."
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <Feature
            title="Adjust figures and forecast with ease"
            desc="Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place."
            icon={<Calculator className="h-4 w-4" />}
          />

          <Button className="mt-4 h-11 sm:h-12 w-full rounded-full bg-black text-white hover:bg-black/90">
            Create Budget
          </Button>
        </div>
      </div>
    </div>
  );
};

type FeatureProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

function Feature({ title, desc, icon }: FeatureProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border text-gray-700">
        {icon}
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-gray-900">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
export default Budgeting;

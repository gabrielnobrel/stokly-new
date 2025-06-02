export const SummaryCardIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center mb-2 rounded-md h-9 w-9 text-slate-500 bg-slate-500 bg-opacity-10">
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-2xl font-semibold text-slate-900">{children}</p>;
};

export const SummaryCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 bg-white rounded-xl">{children}</div>;
};

export const SummaryCardSkeleton = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="space-y-2">
        <div className="bg-gray-200 rounded-md h-9 w-9" />
        <div className="bg-gray-200 rounded-md h-5 w-[86.26px]" />
        <div className="w-48 h-8 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

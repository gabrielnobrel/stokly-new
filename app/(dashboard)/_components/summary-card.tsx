export const SummaryCardIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-9 w-9 flex text-emerald-500 items-center justify-center rounded-md bg-emerald-500 bg-opacity-10 mb-2">
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
  return <div className="bg-white rounded-xl p-6">{children}</div>;
};

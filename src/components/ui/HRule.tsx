import React from "react";

interface HRuleProps {}
const HRule: React.FC<HRuleProps> = ({}: HRuleProps) => {
  return <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />;
};

export default React.memo(HRule);

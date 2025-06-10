import {
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

interface IconProps {
  className?: string;
}

export const PaymentIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <CreditCardIcon className={`${className} text-accent-500`} />
  </div>
);

export const LogisticsIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <TruckIcon className={`${className} text-accent-500`} />
  </div>
);

export const SecurityIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <ShieldCheckIcon className={`${className} text-accent-500`} />
  </div>
);

export const IntegrationIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <ArrowPathIcon className={`${className} text-accent-500`} />
  </div>
);

export const CommunityIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <UserGroupIcon className={`${className} text-accent-500`} />
  </div>
);

export const AnalyticsIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className='bg-accent-500/10 rounded-lg p-3'>
    <ChartBarIcon className={`${className} text-accent-500`} />
  </div>
);

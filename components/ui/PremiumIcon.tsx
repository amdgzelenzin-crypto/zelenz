import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Brush,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Crown,
  Droplets,
  Gem,
  Gift,
  Heart,
  Landmark,
  Lightbulb,
  MapPin,
  Palette,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Thermometer,
  Trophy,
  Wind,
  X,
  XCircle,
} from 'lucide-react';

export type PremiumIconName =
  | 'camera'
  | 'star'
  | 'palette'
  | 'heart'
  | 'map-pin'
  | 'target'
  | 'award'
  | 'gift'
  | 'crown'
  | 'phone'
  | 'gem'
  | 'sparkles'
  | 'trophy'
  | 'check'
  | 'check-circle'
  | 'x'
  | 'x-circle'
  | 'brush'
  | 'lightbulb'
  | 'thermometer'
  | 'wind'
  | 'clock'
  | 'droplets'
  | 'shield'
  | 'shield-check'
  | 'landmark';

const ICON_MAP: Record<PremiumIconName, LucideIcon> = {
  camera: Camera,
  star: Star,
  palette: Palette,
  heart: Heart,
  'map-pin': MapPin,
  target: Target,
  award: Award,
  gift: Gift,
  crown: Crown,
  phone: Phone,
  gem: Gem,
  sparkles: Sparkles,
  trophy: Trophy,
  check: Check,
  'check-circle': CheckCircle2,
  x: X,
  'x-circle': XCircle,
  brush: Brush,
  lightbulb: Lightbulb,
  thermometer: Thermometer,
  wind: Wind,
  clock: Clock,
  droplets: Droplets,
  shield: Shield,
  'shield-check': ShieldCheck,
  landmark: Landmark,
};

type PremiumIconProps = {
  name: PremiumIconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function PremiumIcon({
  name,
  size = 20,
  className = 'text-[#D4A055]',
  strokeWidth = 1.5,
}: PremiumIconProps) {
  const Icon = ICON_MAP[name];
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}

type IconBadgeProps = {
  name: PremiumIconName;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const BADGE_SIZES = {
  sm: { box: 40, icon: 18 },
  md: { box: 48, icon: 22 },
  lg: { box: 56, icon: 26 },
} as const;

export function IconBadge({ name, size = 'md', className = '' }: IconBadgeProps) {
  const s = BADGE_SIZES[size];
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{
        width: s.box,
        height: s.box,
        background: 'linear-gradient(135deg, rgba(212,160,85,0.14), rgba(183,110,121,0.1))',
        border: '1px solid rgba(212,160,85,0.32)',
      }}
    >
      <PremiumIcon name={name} size={s.icon} />
    </div>
  );
}

type StarRatingProps = {
  count?: number;
  size?: number;
  className?: string;
};

export function StarRating({ count = 5, size = 14, className = '' }: StarRatingProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#D4A055] text-[#D4A055]" strokeWidth={1.5} aria-hidden="true" />
      ))}
    </span>
  );
}

type IconLabelProps = {
  icon: PremiumIconName;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
};

export function IconLabel({ icon, children, className = '', iconClassName = 'text-[#B76E79]' }: IconLabelProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <PremiumIcon name={icon} size={18} className={iconClassName} />
      <span>{children}</span>
    </span>
  );
}

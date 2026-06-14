import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { hydrafacialPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(hydrafacialPalaConfig);

export default function HydrafacialPalaPage() {
  return <SalonSeoLanding config={hydrafacialPalaConfig} />;
}

import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { waxingThreadingPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(waxingThreadingPalaConfig);

export default function WaxingThreadingPalaPage() {
  return <SalonSeoLanding config={waxingThreadingPalaConfig} />;
}

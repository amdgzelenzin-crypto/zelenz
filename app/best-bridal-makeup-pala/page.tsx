import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { bestBridalMakeupPalaConfig } from '@/lib/pala-seo-config';
import { salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(bestBridalMakeupPalaConfig);

export default function BestBridalMakeupPalaPage() {
  return <SalonSeoLanding config={bestBridalMakeupPalaConfig} />;
}

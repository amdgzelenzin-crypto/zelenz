import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { bestBridalMakeupKottayamConfig } from '@/lib/kottayam-seo-config';
import { salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(bestBridalMakeupKottayamConfig);

export default function BestBridalMakeupKottayamPage() {
  return <SalonSeoLanding config={bestBridalMakeupKottayamConfig} />;
}

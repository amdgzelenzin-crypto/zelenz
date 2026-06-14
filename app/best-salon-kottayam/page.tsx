import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { bestSalonKottayamConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(bestSalonKottayamConfig);

export default function BestSalonKottayamPage() {
  return <SalonSeoLanding config={bestSalonKottayamConfig} />;
}

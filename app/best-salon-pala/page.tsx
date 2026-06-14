import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { bestSalonPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(bestSalonPalaConfig);

export default function BestSalonPalaPage() {
  return <SalonSeoLanding config={bestSalonPalaConfig} />;
}

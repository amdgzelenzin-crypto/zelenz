import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { hairSalonPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(hairSalonPalaConfig);

export default function HairSalonPalaPage() {
  return <SalonSeoLanding config={hairSalonPalaConfig} />;
}

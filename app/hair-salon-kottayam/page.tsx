import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { hairSalonKottayamConfig } from '@/lib/kottayam-seo-config';
import { salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(hairSalonKottayamConfig);

export default function HairSalonKottayamPage() {
  return <SalonSeoLanding config={hairSalonKottayamConfig} />;
}

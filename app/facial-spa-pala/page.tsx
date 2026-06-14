import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { facialSpaPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(facialSpaPalaConfig);

export default function FacialSpaPalaPage() {
  return <SalonSeoLanding config={facialSpaPalaConfig} />;
}

import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { nailSalonPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(nailSalonPalaConfig);

export default function NailSalonPalaPage() {
  return <SalonSeoLanding config={nailSalonPalaConfig} />;
}

import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { keratinTreatmentPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(keratinTreatmentPalaConfig);

export default function KeratinTreatmentPalaPage() {
  return <SalonSeoLanding config={keratinTreatmentPalaConfig} />;
}

import SalonSeoLanding from '@/components/seo/SalonSeoLanding';
import { beautyParlourPalaConfig, salonPageMetadata } from '@/lib/salon-seo-config';

export const metadata = salonPageMetadata(beautyParlourPalaConfig);

export default function BeautyParlourPalaPage() {
  return <SalonSeoLanding config={beautyParlourPalaConfig} />;
}

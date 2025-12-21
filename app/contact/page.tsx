import { ContactIntro } from '@/components/sections/contact/contact-intro';
import { ContactInfoCard } from '@/components/sections/contact/contact-info-card';
import { ContactFormCard } from '@/components/sections/contact/contact-form-card';
import { personalInfo } from '@/data/personal';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <ContactIntro />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ContactInfoCard personalInfo={personalInfo} />
        <ContactFormCard />
      </div>
    </div>
  );
}

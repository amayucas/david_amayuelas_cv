'use client';

import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section, Card, CardContent } from '@/components/ui';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { useLanguage } from '@/lib/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t('contact.contactInfo')}
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.email')}</p>
                    <a href={`mailto:${profile.email}`} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.phone')}</p>
                    <a href={`tel:${profile.phone}`} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.location')}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{profile.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.availability')}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{t('contact.availabilityValue')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {t('contact.connectWith')}
                </p>
                <SocialLinks size="md" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">
                {t('contact.sendMessage')}
              </h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

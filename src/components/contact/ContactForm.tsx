'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  const contactSchema = z.object({
    name: z.string().min(2, t('contact.validation.name')),
    email: z.string().email(t('contact.validation.email')),
    subject: z.string().min(5, t('contact.validation.subject')),
    message: z.string().min(10, t('contact.validation.message')),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
      setErrorMessage(t('contact.error'));
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t('contact.messageSent')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t('contact.thankYou')}
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline">
          {t('contact.sendAnother')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('contact.name')}
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={cn(
              'w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors',
              errors.name
                ? 'border-red-300 dark:border-red-700'
                : 'border-gray-300 dark:border-gray-700'
            )}
            placeholder={t('contact.namePlaceholder')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('contact.email')}
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors',
              errors.email
                ? 'border-red-300 dark:border-red-700'
                : 'border-gray-300 dark:border-gray-700'
            )}
            placeholder={t('contact.emailPlaceholder')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contact.subject')}
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors',
            errors.subject
              ? 'border-red-300 dark:border-red-700'
              : 'border-gray-300 dark:border-gray-700'
          )}
          placeholder={t('contact.subjectPlaceholder')}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none',
            errors.message
              ? 'border-red-300 dark:border-red-700'
              : 'border-gray-300 dark:border-gray-700'
          )}
          placeholder={t('contact.messagePlaceholder')}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {t('contact.sending')}
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t('contact.send')}
          </>
        )}
      </Button>
    </form>
  );
}

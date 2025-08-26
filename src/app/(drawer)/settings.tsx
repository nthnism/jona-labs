import React from 'react';
import { ThemeSettingsCard } from '@/src/components/features/settings/ThemeSettingsCard';
import { SafeAreaScreen } from '@/src/components/screens/SafeAreaScreen';

export default function Settings() {
  return (
    <SafeAreaScreen>
      <ThemeSettingsCard />
    </SafeAreaScreen>
  );
}

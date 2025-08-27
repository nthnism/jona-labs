import React from 'react';
import { ThemeSettingsCard } from '@/src/components/features/settings/ThemeSettingsCard';
import { ScrollableSafeAreScreen } from '@/src/components/screens/ScrollableSafeAreScreen';

export default function Settings() {
  return (
    <ScrollableSafeAreScreen>
      <ThemeSettingsCard />
    </ScrollableSafeAreScreen>
  );
}

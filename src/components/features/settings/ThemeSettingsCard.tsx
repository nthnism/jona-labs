import React from 'react';
import { Avatar, Card, RadioButton } from 'react-native-paper';
import { translate } from '@/src/functions/translate';
import { useAppDispatch } from '@/src/hooks/useAppDispatch';
import { useAppSelector } from '@/src/hooks/useAppSelector';
import { setTheme, ThemeType } from '@/src/redux/settingsSlice';

const ThemeRadioButtonItem = (
  props: Omit<React.ComponentProps<typeof RadioButton.Item>, 'value'> & {
    value: ThemeType;
  }
) => {
  return <RadioButton.Item {...props} />;
};

const ThemeRadioButtonGroup = ({
  value,
  onValueChange,
  children,
  ...rest
}: Omit<React.ComponentProps<typeof RadioButton.Group>, 'value' | 'onValueChange'> & {
  value: ThemeType;
  onValueChange: (newValue: ThemeType) => void;
}) => {
  return (
    <RadioButton.Group {...rest} value={value} onValueChange={(newValue) => onValueChange(newValue as ThemeType)}>
      {children}
    </RadioButton.Group>
  );
};

export const ThemeSettingsCard = () => {
  const selectedTheme = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();

  return (
    <Card mode={'contained'}>
      <Card.Title
        title={translate('settings.theme.card-title')}
        left={(props) => <Avatar.Icon {...props} icon="theme-light-dark" />}
      />
      <Card.Content>
        <ThemeRadioButtonGroup onValueChange={(newValue) => dispatch(setTheme(newValue))} value={selectedTheme}>
          <ThemeRadioButtonItem label={translate('settings.theme.device')} value="device" />
          <ThemeRadioButtonItem label={translate('settings.theme.dark')} value="dark" />
          <ThemeRadioButtonItem label={translate('settings.theme.light')} value="light" />
        </ThemeRadioButtonGroup>
      </Card.Content>
    </Card>
  );
};

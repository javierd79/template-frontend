import { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Menu, Button, Text, MantineNumberSize, createStyles } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { ILangs } from '@/interfaces';

interface ILanguageSwitcher {
  compact?: boolean;
  icons?: boolean;
  size?: MantineNumberSize;
  popup?: 'hover' | 'click' | 'none';
}

function LanguageSwitcher({
  compact = false,
  icons = false,
  size = 'md',
  popup = 'click'
}: ILanguageSwitcher) {
  const { t, i18n: { changeLanguage } } = useTranslation();
  const [currentLang, setCurrentLang] = useState<ILangs["languages"]>('es');
  const [showPopup, setShowPopup] = useState<boolean>(true)

  const useStyles = createStyles((theme) => ({

  }))

  const { classes } = useStyles();
  const allLangs = ["es", "en"];

  const handleChangeLanguage = (lang: 'en' | 'es') => {
    const newLanguage = lang;
    setCurrentLang(newLanguage);
    changeLanguage(newLanguage);
  }

  return (
    <>
      <Menu 
        opened={opened} 
         onChange={setOpened} shadow="md" width={200}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default LanguageSwitcher
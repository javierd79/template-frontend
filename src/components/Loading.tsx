import { Text, Loader, createStyles, Group } from '@mantine/core'

interface ILoader {
  full?: boolean,
  message?: string,
  children?: React.ReactNode,
  withBorder?: boolean,
  color?: string,
  scheme?: "light" | "dark",
  margin?: string,
  backgroundBlur?: boolean,
}

function Loading({
  full = false,
  message,
  withBorder = false,
  backgroundBlur = false,
  color,
  scheme = "light",
  margin,
  children
}: ILoader) {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      backgroundColor: scheme === 'dark' || theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      backdropFilter: backgroundBlur ? 'blur(10px)' : 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: full ? '100vh' : '100%',
      width: '100%',
      flexDirection: 'column',
    },
    group: {
      border: withBorder ? `1px solid ${scheme == "dark" || theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}` : 'none',
      borderRadius: theme.radius.sm,
      padding: 20,
      margin: margin,
      backgroundColor: scheme === 'dark' || theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    message: {
      color: scheme === "dark" || theme.colorScheme === 'dark' ? theme.white : theme.black,
    }
  }))

  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <Group className={classes.group}>
        <Loader size={48} color={color} />
        {message && (<Text className={classes.message} mt={-3} fw={350} fz={18}>{message}</Text>)}
      </Group>
      {children}
    </div>
  )
}

export default Loading
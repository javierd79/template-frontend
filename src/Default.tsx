import { terminal } from 'virtual:terminal'
import { Title, Text, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0 15px',
    flexDirection: 'column',
    "&:after": {
      backgroundImage: 'url(/error.png)',
      backgroundPosition: 'center center',
      content: "''",
      backgrounSize: "cover",
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      opacity: 0.05,
    }
  },
  sub: {
    display: 'inline-block',
    position: 'relative',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '20px',
    paddingTop: '20px',
    marginBottom: '100px',
    '&:after': {
      height: "100%",
      width: "140px",
      position: "absolute",
      content: "''",
      left: 0,
      bottom: 0,
      borderLeft: `3px solid ${theme.colors.red[7]}`,
      borderBottom: `3px solid ${theme.colors.red[7]}`
    },
    '&:before': {
      height: "100%",
      width: "140px",
      position: "absolute",
      content: "''",
      right: 0,
      top: 0,
      borderRight: `3px solid ${theme.colors.red[7]}`,
      borderTop: `3px solid ${theme.colors.red[7]}`
    },
  }
}))

function Default() {
  const { classes } = useStyles()

  terminal.error("Unspecified mode! Specify one of the next modes: [web, desktop] or run with dev:web or dev:desktop")

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.sub}>
          <Title ta="center" order={2} color="red">
            Something has happened!
          </Title>
          <Title ta="center" order={3} color="red" mb={20}>
            Please check the console for more information.
          </Title>
        </div>
        <Text ta="center">
          Maybe you are trying to start project without specifying the mode?
        </Text>
        <Text ta="center" fw={700}>
          Try to run again with --mode=web or --mode=desktop or try to run with dev:web or dev:desktop
        </Text>
      </div>
    </>
  )
}

export default Default
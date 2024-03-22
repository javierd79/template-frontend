import { Title, createStyles, Button } from "@mantine/core"

interface IErrorPage {
  errorCode: 404 | 401 | 500;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0 15px',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
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
      opacity: 0.1,
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
    zIndex: 99999,
    userSelect: 'none',
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
  },
  redirectContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 250,
    maxWidth: 380,
    marginTop: '-50px',
    width: '100%',
    zIndex: 999999
  },
}))

function ErrorPage({ errorCode }: IErrorPage) {
  const { classes } = useStyles()

  const errorMessages = {
    404: "Page not found or doesn't exist",
    401: "You don't have permission to access",
    500: "Oops! Something went wrong!"
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.sub}>
          <Title ta="center" order={2} color="red">
            Error: {errorCode}
          </Title>
          <Title ta="center" order={3} color="red" mb={20}>
            { errorMessages[errorCode] || "Unknown error" }
          </Title>
        </div>
        <div className={classes.redirectContainer}>
          <Button
            fullWidth
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
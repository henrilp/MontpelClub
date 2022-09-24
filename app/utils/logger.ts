import { consoleTransport, logger as Logger } from 'react-native-logs'

const config = {
  transport: consoleTransport,
  severity: __DEV__ ? 'debug' : 'error',
  transportOptions: {
    colors: `ansi`,
  },
}

export const logger = Logger.createLogger(config)

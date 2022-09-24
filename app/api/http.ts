// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// import { config } from '~/helpers/config'
// import { logger } from '~/helpers/logger'

// /** Http instance. */
// export let http = axios.create({
//   baseURL: config.api.baseUrl,
// })
// injectLoggerInterceptor(http)

// /** JWT http  header */
// const JWT_HEADER = 'Authorization'

// /**
//  * Modifies the http to start using the given jwt
//  * @param jwt
//  */
// export function configureJWT(jwt: string) {
//   http = axios.create({
//     baseURL: config.api.baseUrl,
//   })
//   injectLoggerInterceptor(http)

//   http.interceptors.request.use((axiosConfig: AxiosRequestConfig): AxiosRequestConfig => {
//     if (!axiosConfig.headers) {
//       axiosConfig.headers = {}
//     }

//     axiosConfig.headers[JWT_HEADER] = `Bearer ${jwt}`

//     return axiosConfig
//   })
// }

// function injectLoggerInterceptor(instance: AxiosInstance) {
//   instance.interceptors.request.use((req: AxiosRequestConfig) => {
//     logger.debug('http request', { url: req.url, data: req.data })

//     return req
//   })

//   instance.interceptors.response.use((res: AxiosResponse) => {
//     logger.debug('http response', {
//       url: res.config.url,
//       data: res.config.data,
//       response: JSON.stringify(res.data, undefined, ' '),
//     })

//     return res
//   })
// }

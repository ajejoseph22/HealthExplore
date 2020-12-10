import fetch from 'isomorphic-unfetch'

export interface ApiConfig {
  baseUrl?: string
  endpoint: string
  method?: string
  body?: Record<string, unknown>
  path?: any
  query?: any
}

export default async function invokeApi({
  baseUrl = '/api',
  endpoint,
  method = 'get',
  body,
  path,
  query
}: ApiConfig) {
  let url = `${baseUrl}/${endpoint}`
  if (path) {
    Object.keys(path).forEach((key) => {
      url = url.replace(`{${key}}`, path[key])
    })
  }

  if (query) {
    url =
      url +
      '?' +
      Object.keys(query).reduce(
        (result, key) => result + `${key}=${encodeURIComponent(query[key])}&`,
        ''
      )
  }

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method,
    body: body && JSON.stringify(body)
  })
    .then((response) => {
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return response.json().then((content) => ({ content, response }))
      } else {
        return response.text().then((content) => ({ content, response }))
      }
    })
    .then(({ content, response }) => {
      if (!response.ok) return Promise.reject(content)
      else return content
    })
}

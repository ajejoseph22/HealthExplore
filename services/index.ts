
const callAPI = async (url: string, options={}) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options);
  const json = await response.json();
  return json;
}

 const HomeAPI = {
  /**
   * parameter parsing is done to get search parameters from client and use them in API call
   * on first render.
   */
  async getJobs(params={}) {
    let parameters = []
    if(params['filters']) {
      for(let i in params['filters']) {
        const filteredParams = params['filters'][i].filter((i) => i.active).map((i) => i.key).join(',')
        if(filteredParams) {
          parameters.push(`${i}=${encodeURIComponent(filteredParams)}`)
        }
      }
    }
    if(params['sortOptions']) {
      for(let i in params['sortOptions']) {
        const value = params['sortOptions']
        if(value[i]) {
          parameters.push(`${i}=${value[i]}`)
        }
      }
    }
    if(params['searchTerm']) {
      parameters.push(`searchTerm=${encodeURIComponent(params['searchTerm'])}`)
    }
    if(parameters.length) {
      parameters[0] = '?' + parameters[0];
    }
    const url = `/api/jobs${parameters.join('&')}`;
    console.log("url", url)
    return callAPI(url)
  },
  async getFilters() {
    return callAPI(`/api/filters`)
  }
}

export default HomeAPI;
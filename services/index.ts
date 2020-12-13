
const callAPI = async (url: string, options={}) => {
  console.log(url)
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

 const HomeAPI = {
  /**
   * parameter parsing is done to get search parameters from client and use them in API call
   * on first render.
   */
  async getJobs(origin: string, params={}) {
    let parameters = []
    if(params['filters']) {
      for(let i in params['filters']) {
        const filteredParams = params['filters'][i].filter((i) => i.active).map((i) => i.key).join(',')
        if(filteredParams) {
          parameters.push(`filter[${i}]=${encodeURIComponent(filteredParams)}`)
        }
      }
    }
    if(params['sortOptions']) {
      for(let i in params['sortOptions']) {
        const value = params['sortOptions']
        if(value[i]) {
          parameters.push(`sort[${i}]=${value[i]}`)
        }
      }
    }
    if(params['searchText']) {
      parameters.push(`searchText=${encodeURIComponent(params['searchText'])}`)
    }
    if(parameters.length) {
      parameters[0] = '?' + parameters[0];
    }
    const url = `${origin}/api/jobs${parameters.join('&')}`;
    return callAPI(url)
  },
  async getFilters(origin: string) {
    return callAPI(`${origin}/api/filters`)
  }
}

export default HomeAPI;
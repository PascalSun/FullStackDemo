const errorCodes = [
    { status: 400, statusText: "That request doesn't look quite right" },
    {
      status: 403,
      statusText: "You aren't currently authorised for this resource"
    },
    { status: 404, statusText: "We can't find what you're looking for" },
    {
      status: 500,
      statusText: "Looks like we can't connect to the server right now"
    },
    {
      status: 502,
      statusText:
        "We're having a few issues, rest assured we are on it. Please try again in a minute."
    },
    { status: 503, statusText: "We're down for a moment" }
  ]
  
  export function apiGet(endpoint) {
    let params = { method: "GET" }
    return apiCall(endpoint, params)
  }
  
  export function apiPost(endpoint, payload) {
    let params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    return apiCall(endpoint, params)
  }
  
  export async function apiUpoad(endpoint, payload, files) {
    let tokens = localStorage.getItem("token")
    let accessToken = null
    if (tokens) {
      let tokensObject = JSON.parse(tokens)
      accessToken = tokensObject.access
    }
    let formData = new FormData()
    files.map((file, index) => {
      formData.append(`file-${index}`, file, file.name)
      return null
    })
  
    Object.keys(payload).map(key => formData.append(key, payload[key]))
  
    return fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: formData
    })
      .then(handleResponse)
      .then(data => data)
      .catch(error => {
        let errorCode = errorCodes.find(code => code.status === error.status)
        if (errorCode)
          return {
            status: errorCode.status,
            statusText: errorCode.statusText,
            error: JSON.stringify(error.error || {})
          }
        else
          return {
            status: error.status,
            statusText: error.statusText
          }
      })
  }
  
  export function apiPut(endpoint, payload) {
    let params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    return apiCall(endpoint, params)
  }
  
  export function apiPatch(endpoint, payload) {
    let params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    return apiCall(endpoint, params)
  }
  
  export default function apiCall(endpoint, params) {
    /* const url = (process.env.NODE_ENV === 'development') 
    ? `${endpoint}`
    : `${process.env.REACT_APP_PROD_API}${endpoint}` */
  
    let tokens = localStorage.getItem("token")
    if (tokens) {
      let tokensObject = JSON.parse(tokens)
      let accessToken = tokensObject.access
      const curHeaders = params.headers ? params.headers : {}
      params = {
        ...params,
        headers: { ...curHeaders, Authorization: `Bearer ${accessToken}` }
      }
      // console.log("Api call to:", endpoint)
      //console.log("With:", params)
    }
    return fetch(endpoint, params)
      .then(handleResponse)
      .then(data => data)
      .catch(error => {
        let errorCode = errorCodes.find(code => code.status === error.status)
        if (errorCode)
          return {
            status: errorCode.status,
            statusText: errorCode.statusText,
            error: JSON.stringify(error.error || {})
          }
        else
          return {
            status: error.status,
            statusText: error.statusText
          }
      })
  }
  
  function handleResponse(response) {
    if (response.status > 400) return Promise.reject(response)
    let contentType = response.headers.get("content-type")
    if (contentType.includes("application/json")) {
      return handleJSONResponse(response)
    } else if (
      contentType.includes("text/html") ||
      contentType.includes("text/plain")
    ) {
      return handleTextResponse(response)
    } else {
      return Promise.reject(response)
      // Other response types as necessary. I haven't found a need for them yet though.
    }
  }
  
  function handleJSONResponse(response) {
    return response.json().then(json => {
      if (response.ok) {
        return json
      } else {
        return Promise.reject(
          Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText
          })
        )
      }
    })
  }
  
  function handleTextResponse(response) {
    return response.text().then(text => {
      //console.log(response)
      if (response.ok) {
        return text
      } else {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          err: text
        })
      }
    })
  }
  
export function getQueryString(data):string
{
  return  Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
}).join('&')
}

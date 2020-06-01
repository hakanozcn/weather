

export default async function  baseService(url,requestOptions) {
  
    return fetch(url, requestOptions).then((res) => {
        return res.json()
    }).then( (res) => {
           
            return res;
    }).catch((error) => {
       
        return error;
       
    });
}


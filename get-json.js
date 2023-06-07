// function getJSON(path, params) {
//     params, err = strconv.Atoi(url[2])
// 	if (path != "/artist/"+url[2]) {
// 		return err
// 	}
//     res, err = http.Get(path)
//     if (err != nil) {
// 		return err
// 	}
// 	body, err = ioutil.ReadAll(res.Body)
// 	if (err != nil) {
// 		return err
// 	}
// 	jsonErr = json.Unmarshal(body)
// 	if (jsonErr != nil) {
// 		log.Println("not JSON")
// 		return jsonErr
// 	}	 
// }

async function getJSON(path, params) {
    const url = params ? `${path}?${new URLSearchParams(params).toString()}` : path
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json().then((data) => {
            if (data.error) throw new Error(data.error);
            return data.data;
        });
    })
} 
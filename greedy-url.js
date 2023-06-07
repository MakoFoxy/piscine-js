function getURL(dataset) {
    let urlFilter = /(https:|http:)\/\/\S+/;
    return dataset.match(new RegExp(urlFilter, "gm"));
  };
  function greedyQuery(dataset){
    let res = [];
    let arr = getURL(dataset);
    arr.map((x) => {
      if (/[?]/.test(x) && x.split("&").length >= 3) {
        res.push(x);
      }
    });
    return res;
  };
  function notSoGreedy(dataset) {
    let res = [];
    let arr = getURL(dataset);
    arr.map((x) => {
      if (
        /[?]/.test(x) &&
        (x.split("&").length === 2 || x.split("&").length === 3)
      ) {
        res.push(x);
      }
    });
    return res;
  };
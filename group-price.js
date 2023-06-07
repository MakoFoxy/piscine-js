

//var str = "USD12.31"

function groupPrice(str) {
    let filter = /(USD|\$)([0-9]+)[\.]([0-9]+)/;
    let result = [];
    if (!filter.test(str)) {
      return [];
    }
    let res = str.match(new RegExp(filter, "g"));
    res.map((x) =>
      result.push([filter.exec(x)[0], filter.exec(x)[2], filter.exec(x)[3]])
    );
    return result;
  };

  //console.log(groupPrice(str))
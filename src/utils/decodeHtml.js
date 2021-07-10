export const decodeHtmlCharCodes = str => {
    let res = str.replace(/(&#(\d+);)/g, (match, capture, charCode) => 
            String.fromCharCode(charCode));
    if(/&\w+;/g.test(str)){
        res= res.replace(/&\w+;/g, (match) => {
            if(match==="&quot;" || match==="&apos;")
            return "'";
        })
    }
    return res;
}
  
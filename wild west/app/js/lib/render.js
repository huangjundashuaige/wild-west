
renderList = ($trbody, trs = []) => {
  html = trs.map((trs) => {
    temp_s = "<tr>"
    for(var i =0;i<trs.length;i++)
    {
      temp_s+='<td>'+trs[i]+'</td>'
    }
    return temp_s;
   });
  $trbody.html(temp_s.join(''));
};

export {
  renderList
}
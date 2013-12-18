OA = OA ||
  currentPage: 0
  data:[]
  getData: (page,cb)=>
    return $.getJSON "/api/britishlibrary/"+(page||0).toString(), cb

$(()=>

  OA.getData OA.currentPage,(d)=>
    console.log d


)
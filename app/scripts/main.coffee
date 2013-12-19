OA = OA ||
  currentPage: 0
  data:[]
  # get the british library data
  getData: (page,cb)=>
    return $.getJSON "/api/british-library/"+(page||0).toString(), cb
  # project the data into a usable form
  projectData: (data)=>
    return data.map (d)=>
        title: d.title
        thumbUrl: d.url_s
        imageUrl:d.url_l

  # add an item
  addItem: (item)=>
    grid = document.querySelector('#grid');
    image = document.createElement('img');
    salvattore['append_elements'](grid, [image])





$(()=>

  #get data and put it in the data array
  OA.getData OA.currentPage,(d)=>
    if d.query and d.query.results
      OA.projectData(d.query.results.photo).forEach OA.addItem




)
const data = [
  {
    type: 'title',
    value: 'Hello World from JS'
  },
  {
    type: 'text',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, rem.'
  },
  {
    type: 'columns',
    value: [
      '1. Lorem ipsum dolor sit amet.',
      '2. Lorem ipsum dolor sit amet.',
      '3. Lorem ipsum dolor sit amet.',
    ]
  },
  {
    type: 'images',
    value: 'assets/image.png',
  },
]
let content = document.getElementById('content');
renderContent(data);
function renderContent (data) {
  data.forEach(elem => {
    let html;
    if(elem.type === 'title'){
      html = renderElem(elem);
    }
    else if(elem.type === 'text'){
      html = renderElem(elem);
    }
    else if(elem.type === 'columns'){
      let cols = renderColumns(elem)
      html = `<div class="row">${cols}</div>`
    }
    else if(elem.type === 'images'){
      html = renderElem(elem)
    }
    content.insertAdjacentHTML('beforeend', html);
  })

}


function renderElem (elem) {
  switch (elem.type) {
    case 'title': {
      return `<div class="row">
                <div class="col-sm">
                  <h1 class="text-center">${elem.value}</h1>
                </div>
              </div>`
    }
    case 'text': {
      return `<div class="row">
        <div class="col-sm">
          <p class="text-center">
            ${elem.value}
            </p>
        </div>
      </div>`
    }
    case 'images': {
      return `<div class="row">
        <div class="col-sm">
          <div style="width: 200px">
            <img src="${elem.value}" alt="">
          </div>
        </div>
      </div>`
    }
  }
}

function renderColumns (data) {
  return data.value
          .map( item =>`<div class="col-sm">${item}</div>`)
          .join('')
}

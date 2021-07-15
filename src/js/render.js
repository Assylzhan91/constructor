function renderElem (elem) {
  console.log('elem', elem);
  switch (elem.type) {
    case 'title':
      return `<div class="row">
                <div class="col-sm">
                  <h1 class="text-center">${elem.value}</h1>
                </div>
              </div>`
    break;
    case 'text':
      return `<div class="row">
        <div class="col-sm">
          <p class="text-center">
            ${elem.value}
            </p>
        </div>
      </div>`
    break;
    case 'images':
      return `<div class="row">
        <div class="col-sm">
          <div style="width: 200px">
            <img src="${elem.value}" alt="">
          </div>
        </div>
      </div>`
  }
}

function renderColumns (data) {
  return data.value
    .map( item =>`<div class="col-sm">${item}</div>`)
    .join('')
}
export const templates = {
  renderColumns,
  renderElem
}

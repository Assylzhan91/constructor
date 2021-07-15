import { data, content } from './model'
import { templates } from './render'
import '../styles/main.css'

data.forEach(elem => {
  let toHTML = templates[elem];
  console.log('toHTML', toHTML)
  // content.insertAdjacentHTML('beforeend', html);
})

  //   let html;
  //   if(elem.type === 'title'){
  //     html = templates.renderElem(elem);
  //   }
  //   else if(elem.type === 'text'){
  //     html = templates.renderElem(elem);
  //   }
  //   else if(elem.type === 'columns'){
  //     let cols = renderColumns(elem)
  //     html = `<div class="row">${cols}</div>`
  //   }
  //   else if(elem.type === 'images'){
  //     html = templates.renderElem(elem)
  //   }
  //   content.insertAdjacentHTML('beforeend', html);
  // })

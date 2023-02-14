import { sayHi } from '@jessiesiat/hello-gh-packages'

import { tina, http } from 'a'

console.log(sayHi('jess'))

console.log(`tina: ${tina}`)

let api = http('https://dog.ceo/api', { mode: "cors" })
            .errorType("json")
            .resolve(r => r.json());

// api.get('/breeds/image/random').json(data => {
//   console.log('data gg: ', data)
//   let img = document.createElement('img');
//   img.src = data.message;
//   document.body.appendChild(img);
// })

try {
  let owww = 'ggee';
  (async() => {
    const data = await api.get('/breeds/image/random');
    console.log('await data:', owww, data)
    let img = document.createElement('img');
    img.src = data.message;
    document.body.appendChild(img);
  })()
} catch (error) {
  console.log('error', error)
}
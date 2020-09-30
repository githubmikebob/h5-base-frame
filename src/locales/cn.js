const dictionaries_files = require.context('./dictionaries', true, /\.js$/)

function generate(dictionaries, name, value) {
  switch (name) {
    case 'message':
      if (value.hasOwnProperty('success')) dictionaries['success'] = value.success
      if (value.hasOwnProperty('error')) dictionaries['error'] = value.error
      break
    case 'button':
      if (value.hasOwnProperty('buttons')) dictionaries[name] = value.buttons
      break
    default:
      if (value.hasOwnProperty('locales')) dictionaries[name] = value.locales
      break
  }
  return dictionaries
}

const dictionaries = dictionaries_files.keys().reduce((dictionaries, path) => {
  const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = dictionaries_files(path)
  return generate(dictionaries, name, value)
}, {})

export default dictionaries

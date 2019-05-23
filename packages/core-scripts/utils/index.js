const pick = (source, ...fields) =>
  fields.reduce((acc, curr) => ({ ...acc, [curr]: source[curr] }), {})

const getRepoNameByAddress = str => {
  const matched = str.match(/\/(.*).git$/)

  if (!matched) {
    return null
  }

  return matched[1]
}

const validateRepoAddress = str => /^git@github.com:(.*)\.git$/.test(str)

exports.pick = pick
exports.getRepoNameByAddress = getRepoNameByAddress
exports.validateRepoAddress = validateRepoAddress

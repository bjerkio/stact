import path from 'path';

module.exports = {
  process: (_, filename) =>
    `module.exports = '${JSON.stringify(path.basename(filename))}';`,
};

const wordlist = require("../resources/big_chonk_list.json");

const INSERT_MAX = 25;

const words = wordlist.map((pair) => {
  const [[word, definition]] = Object.entries(pair);
  return {
    word,
    definition,
    approved: true,
    moderated: true
  };
});

exports.seed = async function (knex) {
  let total = words.length;
  let start = 0;
  let errors = 0;
  let inserts = 0;
  while (total > 0) {
    let finish = start + INSERT_MAX;
    let chunk = words.slice(start, finish);
    console.log(`${start} -> ${finish}`);
    total -= chunk.length;
    start += chunk.length;
    try {
      await knex("Words").insert(chunk);
      inserts += 1;
    } catch (err) {
      // console.log(err)
      errors += 1;
    }
  }
  console.log({ chunk_size: INSERT_MAX, errors, inserts });
  return true;
};
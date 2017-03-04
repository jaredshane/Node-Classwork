#!/usr/bin/env node

const first = 'Jared';
const second = 'Fuller';
const myName = {first, second}

const nodeCheer = ({first, second}) => {
  let name = `${first} ${second}`.toUpperCase();
  [...first, ...second].forEach((letter) => {
    let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a'
    console.log(`Gimmie ${conj} ${letter.toUpperCase()}!`)
  })
  console.log(`What's that spell?\n${name}`);
}

nodeCheer(myName);

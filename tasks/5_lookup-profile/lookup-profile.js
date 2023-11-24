const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0,
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

export function lookupProfile(firstName, property) {
  let person = contacts.find((contact) => contact.firstName === firstName);

  if (!person) {
    return 'No such contact';
  }

  if (person && person.hasOwnProperty(property)) {
    return person[property];
  } else {
    return 'No such property';
  }
}
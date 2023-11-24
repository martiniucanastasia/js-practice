// import { populateTable } from './populate-table';

const students = [
  {
    id: 1,
    name: 'Andrii',
    age: 22,
    isWorkExperience: true,
  },
  {
    id: 2,
    name: 'Anna',
    age: 21,
    isWorkExperience: false,
  },
  {
    id: 3,
    name: 'Marta',
    age: 23,
    isWorkExperience: true,
  },
];

describe.skip('populateTable', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a table', () => {
    populateTable(students);
    expect(document.querySelector('table')).toBeDefined();
  });

  it('should have 4 rows', () => {
    populateTable(students);
    expect(document.querySelector('table').querySelectorAll('tr').length).toBe(4);
  });

  it('should have 4 columns', () => {
    populateTable(students);
    expect(document.querySelector('tr').children.length).toBe(4);
  });

  it('should build cells with correct data', () => {
    populateTable(students);

    const $rows = document.querySelectorAll('tr');
    const $row1 = $rows[0];
    const $row2 = $rows[1];
    const $row3 = $rows[2];
    const $row4 = $rows[3];

    expect($row1.children[2].innerHTML).toBe('age');
    expect($row2.children[1].innerHTML).toBe('Andrii');
    expect($row3.children[3].innerHTML).toBe('no');
    expect(+$row4.children[0].innerHTML).toBe(3);
  });
});

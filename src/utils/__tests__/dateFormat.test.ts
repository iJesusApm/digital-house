import {dateFormat} from '../dateFormat';

describe('dateFormat', () => {
  it('returns the date formatted in Spanish', () => {
    const inputDate = '2022-02-11';
    const expectedOutput = '11 de febrero, 2022';

    const result = dateFormat(inputDate);
    expect(result).toEqual(expectedOutput);
  });
});

import { includeJa } from '../utils'

describe('include Ja', () => {
  test('All in JP', () => {
    expect(includeJa('日本語の文章')).toBeTruthy
  })
  test('Partially in JP', () => {
    expect(includeJa('日本語の文章の中でEnglishもあるよ')).toBeTruthy
  })
  test('All in Eng', () => {
    expect(includeJa('This is written in English')).toBeFalsy
  })
  test('All in Russian', () => {
    expect(includeJa('комментарий')).toBeFalsy
  })
})

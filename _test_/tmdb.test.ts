import { imageUrl } from '../src/services/tmdb';

test('imageUrl is defined and points to tmdb', () => {
  expect(imageUrl).toContain('image.tmdb.org');
});

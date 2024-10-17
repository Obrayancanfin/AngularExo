import { Emoji } from "./emoji.pipe";



describe('EmojiPipe', () => {
  it('create an instance', () => {
    const pipe = new Emoji();
    expect(pipe).toBeTruthy();
  });
});

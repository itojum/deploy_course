/**
 * 配列の要素をランダムに並び替える
 * @param {Array} array - シャッフルする配列
 * @returns {Array} シャッフルされた新しい配列
 */
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
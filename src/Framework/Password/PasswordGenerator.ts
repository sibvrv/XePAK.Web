const string = "abcdefghijklmnopqrstuvwxyz"; //to upper
const numeric = "0123456789";
const punctuation = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

/**
 * Simple Password Generator
 * @param length
 */
export function passwordGenerator(length = 20 + Math.random() * 20) {
  let password = "";
  let character = "";

  while (password.length < length) {
    const entity1 = Math.ceil(string.length * Math.random() * Math.random());
    const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
    const entity3 = Math.ceil(
      punctuation.length * Math.random() * Math.random()
    );
    let hold = string.charAt(entity1);
    hold = entity1 % 2 === 0 ? hold.toUpperCase() : hold;
    character += hold;
    character += numeric.charAt(entity2);
    character += punctuation.charAt(entity3);
    password = character;
  }

  return password;
}

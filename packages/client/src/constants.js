// constants.js
const CONTRACT_ADDRESS = "0xc8fe61Fab7eC6e2CD22F8DcAdF7D4bEbFCe4700E";

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  // 変数を constants.js 以外の場所でも使えるようにします。
  export { CONTRACT_ADDRESS, transformCharacterData };

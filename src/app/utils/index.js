exports.isURL = url => {
  const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return urlRegex.test(url);
};

//Mutates and Concatenate Two Objects into new Object
exports.contactObjs = (obj1, obj2) => {
  return Object.assign({}, obj1, obj2);
};

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  // get the index of media and next one.
  const index = url.indexOf(target) + target.length;
  // then get all index including media index and add crop and the rest of indexes
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;

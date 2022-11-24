var lengthOfLastWord = function(s) {
    const editedSentence = s.trim().split(" ")
    const length = editedSentence.length
    return editedSentence[length - 1].length
};

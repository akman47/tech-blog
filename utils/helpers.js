module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    },
    postCommentDeleteBtn: (authorId, userId) => {
        if (authorId === userId) {
            return true;
        }
        return false;
    },
    commentDeleteBtn: (commentAuthor, userId, postAuthor) => {
        if (commentAuthor === userId && postAuthor !== userId) {
            return true;
        }
        return false;
    },

}
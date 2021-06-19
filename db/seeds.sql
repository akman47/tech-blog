INSERT INTO user ('username', 'password')
VALUES
    ('user1', 'pw1234'),
    ('user2', 'pw1234'),
    ('user3', 'pw1234');

INSERT INTO post ('title', 'post_text', 'user_id')
VALUES
    ('Coding is fun', 'Yes it is', 1),
    ('Using Handlebars.js', "Learn a new code", 2),
    ('ABC', "Easy as 123", 3);

INSERT INTO comment ('user_id', 'post_id', 'comment_text')
VALUES
    (1,2,'Can you handle it?'),
    (2,2, 'Yes I can'),
    (3,1, 'Every day I am hustling');
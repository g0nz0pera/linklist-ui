-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing

create table
  links (
    id bigint generated by default as identity primary key,
    inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    data jsonb,
    title text,
    url text,
    icon text
  );


INSERT INTO links (title,url,icon) VALUES ('Youtube','https://www.youtube.com','FaYoutube');
INSERT INTO links (title,url,icon) VALUES ('Github','https://www.github.com','FaGithub');
INSERT INTO links (title,url,icon) VALUES ('Twitter','https://www.twitter.com','FaTwitter');
INSERT INTO links (title,url,icon) VALUES ('Telegram','https://www.telegram.com','FaTelegram');

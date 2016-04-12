NormALL - Normalize all things !
=======

JS library to normalize `filenames`, `usernames`, ...


### normall(str) or normall.base(str)

Apply basic normalization: Convert Chinese characters to Pinyin, then `latenize` to remove non-Latin characters then strip non- `ASCII` characters then `trim` leading and trailing whitespace.


### normall.filename(str)

Normalize `str` for use in filename: First apply`base` function above then strip `illegal filename chars` then `" " => "_"`. Finally, convert the string to lowercase.

:Warning: This does not expect extensions, and normalizes the "name" part of the filename


### normall.ascii(str)

Strips non ascii chars from string


### normall.latenize(str)

Converts all non latin characters to latin characters. Strips accents, ...


### normall.accents(str)

Alias to `normall.latenize`


### normall.username(str)

Normalizes `str` to be used as a username (strips accents, ...)

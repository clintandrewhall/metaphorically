metaphorical-geek
=================

[ ![Codeship Status for clintandrewhall/metaphorically](https://codeship.io/projects/fadad5e0-3aa3-0132-083a-261a2707f8ca/status)](https://codeship.io/projects/42427)

Metaphors rock.

## How to submit your metaphor

Create a pull request with either your addition to an existing metaphor or your
new metaphor in /metaphor in the following format:

```
---
title: Name of the Tech
...

<Definition source="SOURCE" href="LINK">
  DEFINITION AS QUOTED FROM THE SOURCE-- I RECOMMEND WIKIPEDIA.
  (MARKDOWN ACCEPTED)
</Definition>

<Metaphor id="SOME ID">
  <M4Title>TITLE OF YOUR MASTERWORK</M4Title>
  <M4Content>
    CONTENT OF YOUR MASTER WORK, (MARKDOWN ACCEPTED)
  </M4Content>
  <M4Author handle="YOUR HANDLE" href="LINK TO YOU" />
</Metaphor>
```

Markdown is accepted almost anywhere, even outside the tags themselves.

## Hacky, Hacky

I've been in a bit of a hurry to get this together, so the code isn't the
greatest (#movefast).  All the same, feel free to take a look and suggest
improvements.

Most of the legwork has been in trying to make the metaphor pages as simple
to create and edit as possible. I've got a pretty hacky build script that auto
links everything together, but one cool thing is using `react-markdown` to blend
markdown and React, (yes, I'm crazy).

Anyways, let me know what you think.  Cheers!

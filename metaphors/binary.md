---
title: Binary Code
...

<M4Definition source="Wikipedia" href="http://en.wikipedia.org/wiki/Binary_code">
A binary code represents text or computer processor instructions using the binary number system's two binary digits, 0 and 1. A binary code assigns a bit string to each symbol or instruction. For example, a binary string of eight binary digits (bits) can represent any of 256 possible values and can therefore correspond to a variety of different symbols, letters or instructions.
</M4Definition>

<Metaphor id="counting-puzzle">
<M4Title>Binary is a Counting Puzzle</M4Title>
A lot of people are confused by what Binary actually is... sure, it’s a series of 1s and 0s. But it’s been represented as computing itself, (which it is, but not in the way that we’ve dramatized it).

While most programs, in their most basic, *basic* form, are binary, binary in and of itself is a method of counting.

So let’s take it as a puzzle.  Suppose we have a checkers set, with red and black pieces and the checkerboard.  Then say I cut the board so that there is only one line of squares, which would be eight squares:
     _ _ _ _ _ _ _ _
    |_|_|_|_|_|_|_|_| = 0

So now we say that the red checkers are ‘1’. So there are no checkers on the board, so that’s obviously zero. And for 1 we’d put a red square:
     _ _ _ _ _ _ _ _
    |r|_|_|_|_|_|_|_| = 1
     1

But now... how do we represent 2? We only have red checkers... well, we have more squares in our row... why not put a red checker in the next space?  That could be 2, right:
     _ _ _ _ _ _ _ _
    |_|r|_|_|_|_|_|_| = 2
       2

Ok, so now what about three?  Well, we could just move the checker down one square:
     _ _ _ _ _ _ _ _
    |_|_|r|_|_|_|_|_| = 3?

But that seems wasteful... the larger the number, the more squares we need.  Can we make it so we can use fewer squares?

Well we already said that the first square was one if the red checker was there... why not use it, too?

     _ _ _ _ _ _ _ _
    |r|r|_|_|_|_|_|_| = 3
     1+2

That’s a much better use of the squares.  Now, if we follow the pattern we’ve set up, we can set up the counting game to be REALLY efficient:

     _ _ _ _ _ _ _ _
    |_|_|r|_|_|_|_|_| = 4
         4
     _ _ _ _ _ _ _ _
    |r|_|r|_|_|_|_|_| = 5
     1 + 4
     _ _ _ _ _ _ _ _
    |_|r|r|_|_|_|_|_| = 6
       2+4
     _ _ _ _ _ _ _ _
    |r|r|r|_|_|_|_|_| = 7
     1+2+4

...and so on...

Do you see the pattern?

    0  0  0  0  0  0  0  1
    1  2  4  8  16 32 64 128

Do those numbers sound familiar?  16, 32, 64, 128... they’re all sizes of iPods, thumb drives and other storage devices. :-)

Binary helps computers build numbers, which combine to form letters, which combine to form other, more complicated structures.  That’s all binary is...

...and no matter what someone may tell you: they can’t read large portions of it, (and who would want to?)  
<M4Author handle="clintandrewhall" href="http://www.github.com/clintandrewhall" />
</Metaphor>

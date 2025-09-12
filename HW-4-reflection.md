# Nick Nolden

## HW-4-reflection

### Skill Assessment

When I first started this lesson, I still had a decent idea about how objects and arrays worked in JS. Now after finishing this assignment, I was able to refresh my memory. Accessing them may seem confusing at first glance, but it as simple as `variable.object.method (map, find, filter, reduce, etc)`. Spread operators I remembered pretty vividly, as they are very essential for maximum immutability (`...object`). These make copies of existing data so the originals don't get affect by what you want to do with it. This assignment wasn't a walk in the park though, so Ai was used for when I was really stuck. At least I finally remembered to sign up for Copilot.

### React Readiness

I definitely feel the most confident with using the spread operator. Those can make quick and easy copies of needed data so I can mess with that instead of the originals. With that said, I could definitely use a little more practice with array methods.

### Array Methods Mastery

I think `.filter` is the array method I feel the most confident in using. I think it is the most straight forward one to use compared to all the others. All you need to input is the data and what exactly you're looking for in it.

`const tripleDigits = numbers.filter((number) => number >= 100);`

`.map` is the array method I'm still a little iffy on, and I think it can be best seen with my attempt at `addAssignment`. I know it can allow for the array data to be cleanly output in the terminal and have it look nice. However it originally displayed as `[Array]`, so I ended up looking in the MDN docs and I used [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to display the data. I'm confident `.map` could've been used somehow to cleanly display the data. While using JSON.stringify did work, I have a gut feeling it won't fly for React.

### Immutability Understanding

Whenever we want to add new data to already existing objects and array, we do this in a way that doesn't modify the original data, immutability if you will. If we did modify the original data, or mutate it, it can cause a whole slew of problems down the line, like making things a lot harder to debug when issues do arise.

### Git Workflow

Making commits as we work, I think, is the smart way to go about using Git. Sure, making frequent commits can get tiring, but if you make a big mistake somewhere, you can revert back without losing a ton of your progress.

### Problem Areas

I've already made mention of it in the Array Methods Mastery section, but the `addAssignment` function of the `gradebook-challenge` was the part that was kicking me down the most. The previous two functions were no slouches either, but once I got the solution going, it was smooth sailing finishing them up. `addAssignment` was just special in how not fun it was trying to get it to work. Heck I don't even think what I did was good or how I got it to display in the terminal, but at the very least it works, and it is immutable.

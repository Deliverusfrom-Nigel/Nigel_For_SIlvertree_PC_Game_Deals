# Nigel_For_SIlvertree_PC_Game_Deals
For my assasment Stage for my application at silvertree education
# PC Game Deals

A small web page that lists PC game deals. It shows the sale price and an
"ON SALE" tag only for discounted games, and it has live search and an
on-sale filter. The logic behind it is a set of small, separate functions.

## What I built

- **Part A:** `isOnSale`, `getOnSale`, `discountPercent`, `getCheapest` and
  `searchByTitle`, plus small helpers `getPrice` and `cleanTitle`.

- **Part B:** a table of all 8 deals. On-sale games show the sale price,
  the normal price struck through, the discount and an ON SALE tag. Games
  that are not on sale show only the normal price.

- **Part C:** live search (updates on every keystroke) and an "On sale
  only" checkbox. Both go through one `updateDeals` function, so they work
  together. I did **not** attempt the CheapShark API or add much styling.

## Choices

- Plain HTML, CSS and JavaScript, because the project is small.
- Logic (Part A) and page code (Part B) are kept separate in the file. The
  page only calls the Part A functions, so the logic can be tested from the
  console without the page.
- `isOnSale(game)` is the single definition of "on sale"
  (`salePrice < normalPrice`). `getOnSale` and `discountPercent` both use
  it, so the rule lives in one place.
- Rows are built with `createElement` and `textContent`, not `innerHTML`, so
  text from a future API can't inject HTML.
- `renderDeals` takes a list. That is why the filter and search needed only
  a few lines: they just pass it a different list.
- `updateDeals` always starts from the full list, runs the search, then the
  on-sale filter, and renders once. This stops the two controls from
  undoing each other.
- Everything is in one file (`script.js`) to keep it simple.

## Assumptions

- **On sale** means `salePrice < normalPrice` (strictly lower).
- **Cheapest** means the lowest price the customer pays (the sale price when
  on sale). Ties return the first game in the list. An empty list returns
  `null`.
- **Discount** is `(normal - sale) / normal * 100`. It returns 0 when the
  game is not on sale or `normalPrice` is 0 or less, so there is no
  divide-by-zero. The function returns the raw number (50.03...). I round
  to a whole number only when displaying it.
- **Search** is case-insensitive, trims the query, and matches anywhere in
  the title. An empty query returns every game, and no match returns an
  empty array (the page shows "No games found").

## Obstacles

- **Skill Issue** One obstacle was that I havent Done Web Development in a minute, last semester was where the heavy web dev stuff was happening.
- **Spammed Email ** The Email for this project was captrued in the spam emails so i did not see it in time, so there was a time contraint.
- **`return` inside a loop.** In `getOnSale` and `searchByTitle` I put
  `return` inside the `for` loop, so the functions stopped after the first
  game. I fixed it by collecting matches in an array declared before the
  loop and returning it after the loop.
- **Laptop issues**: Due to My Laptop's Capabilities I did all the project in GitHub CodeSpace, the debugger was giving me problems, so I was Debugging in an online compiler. 

- **Variable scope.** I declared `found` and the results array inside the
  loop, so they reset on every pass or could not be seen after the loop. I
  moved them above the loop.
- **`const` vs `let`.** In `getCheapest` I reassigned a `const`, which
  throws an error. It needed `let`.
- **Strings are immutable.** `cleanTitle` computed a lowercase string but
  did not `return` it, so every comparison used `undefined`.
- **`toFixed` returns a string.** Adding it inside `discountPercent` made
  the function return a string in one case and a number in another. I now
  round only when displaying.
- **Missing helper.** My first page run failed with
  `createCell is not defined`, because I had not copied all the helper
  functions across.
- **Blank Discount column.** The page rendered, but the discount cell was
  never filled in for sale rows. I noticed it in a screenshot of the page.
- **"Search isn't working."** I had written `searchByTitle` but never added
  a search box or an event listener, so nothing on the page called it.
- 

## Resources

- **AI use:** I used Claude (Anthropic) to break down the brief, review my
  Part A functions and explain my bugs. I wrote and fixed the first drafts
  of the Part A functions myself. Claude gave me the final `getCheapest`
  after I asked for it, and wrote the CSS, HTML Skeleton, the search and
  filter wiring, and a draft of this README, which I then
  edited.

## Time taken
- About roughly 3 hours, I cannot lie I was in a frantic state as I said, I didnt see the Spammed Email in time, and I was maybe Over Analysing the Scope, Trying and Intensly thinking which was to do this project, but all in all 3 hours is probably yes, the time i took.  


## What I'd do differently

- Build the table and a rendering function first, then refine the logic. I
  spent a lot of time on Part A before I could see anything on screen.
- Add automated tests (even a few `console.assert` lines) for the edge
  cases: empty list, ties, zero prices, empty search.
- Add the CheapShark API with loading and error states. The `renderDeals`
  and `updateDeals` structure means only the data source would change.
- Split the logic and the page code into separate files, and improve the
  styling.
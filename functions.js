const games = [
  {
    "id": 1,
    "title": "Hollow Knight",
    "normalPrice": 14.99,
    "salePrice": 7.49,
    "store": "Steam"
  },
  {
    "id": 2,
    "title": "Stardew Valley",
    "normalPrice": 13.99,
    "salePrice": 13.99,
    "store": "GOG"
  },
  {
    "id": 3,
    "title": "Celeste",
    "normalPrice": 19.99,
    "salePrice": 4.99,
    "store": "Steam"
  },
  {
    "id": 4,
    "title": "Hades",
    "normalPrice": 24.99,
    "salePrice": 12.49,
    "store": "Epic Games"
  },
  {
    "id": 5,
    "title": "Portal 2",
    "normalPrice": 9.99,
    "salePrice": 0.99,
    "store": "Steam"
  },
  {
    "id": 6,
    "title": "Terraria",
    "normalPrice": 9.99,
    "salePrice": 9.99,
    "store": "GOG"
  },
  {
    "id": 7,
    "title": "Disco Elysium",
    "normalPrice": 39.99,
    "salePrice": 9.99,
    "store": "GOG"
  },
  {
    "id": 8,
    "title": "Cuphead",
    "normalPrice": 19.99,
    "salePrice": 14.99,
    "store": "Steam"
  }
]

// My first Function getting the games on sale 
function getOnSale(games)
{
  const  gamesOnSale = []
  for (let index = 0; index < games.length; index++) 
    {
      let game = games[index]
          if (game.salePrice < game.normalPrice)
              {
                  gamesOnSale.push(game) 
              }
    } 
    return gamesOnSale
}
function isOnSale(game)
{
  return game.salePrice < game.normalPrice
}

// Second Function gettting the discount for a game passed into the function
function discountPercent(game)
{
    if (game.salePrice === game.normalPrice || game.normalPrice === 0 || game.normalPrice < 0)
    {
        return 0
    }
    
    else 
      {
        return ((((game.normalPrice - game.salePrice)/game.normalPrice)*100).toFixed(2))
    }
}


// Third Function Getting the cheapest game
function getPrice(game)
{
  if (game.salePrice === game.normalPrice)
  {
    return game.salePrice
  }
  else if (game.normalPrice > game.salePrice)
  {
    return game.salePrice
  }
  else
  {
    return game.normalPrice
  }
}


function getCheapest(games)
{
  if (games.length === 0)
  {
    return null
  }
  let currentCheapest = games[0]  // Const Cannot be reassingled 

  for (let index = 1; index < games.length; index++) 
    {
      if (getPrice(games[index]) < getPrice(currentCheapest))
        { 
          currentCheapest = games[index]
        }
      }
    return currentCheapest
  
}

// Functioin 4 Case insenitive title match
function cleanTitle(title)
  {
    return title.toLowerCase().trim()  // Im not going to cut or strim anything, or I could trim the end for whitespaces at the end 
  }

function searchByTitle(games, title) 
{
    const results = []
    
  for (let index = 0; index < games.length; index++) 
    {
    const game = games[index]
    if (cleanTitle(game.title).includes(cleanTitle(title))) 
    {
      results.push(game)
    } 
  }  
  return results
}

// This is where all the logic stuff finishes off, NOw we go to presenting the data in the table 






// The actual page with the data, its code is now here

function createCell(text)
{
  const cell = document.createElement("td")
  cell.textContent = text
  return cell
} // here im creating the cell this is just a helper fnction



function formatPrice(amount)
{
  return "R" + amount.toFixed(2)
}   // just formatting the price fields


// Here this is the table for 1 game 
function createRow(game) 
{
  const row = document.createElement("tr")  
  const titleCell  = createCell(game.title)
  const storeCell  = createCell(game.store)
  const priceCell = document.createElement("td")
  const discountCell = document.createElement("td")
  const statusCell = document.createElement("td")


  if (isOnSale(game)) 
    {   
      // Here now we are trying to "format" and display the prices of the game sthat are on sale
    const nromal = document.createElement("s")
    nromal.textContent = formatPrice(game.normalPrice)
    priceCell.append(formatPrice(game.salePrice) + " ", nromal)
    
    // this part is for now the display of the percentage off 
    discountCell.textContent = Math.round(discountPercent(game)) + "% off"
    
    
    const tag = document.createElement("span")
    tag.className = "tag"
    tag.textContent = "ON SALE"
    statusCell.append(tag)


  } else {
    // here i just put the normal price 

    priceCell.textContent = formatPrice(game.normalPrice)

    discountCell.textContent = "-"
  }


  row.append(titleCell, storeCell, priceCell, discountCell, statusCell)
  return row
}

function renderDeals(list) 
{
  const tbody = document.getElementById("deals")
  tbody.textContent = ""

    if (list.length === 0) 
      {
        const row = document.createElement("tr")
        const cell = createCell("No games found")
      
        cell.colSpan = 5
        row.append(cell)
        tbody.append(row)
        return
      }    
  
  for (let index = 0; index < list.length; index++) 
    {
      tbody.append(createRow(list[index]))
    }
}

renderDeals(games)

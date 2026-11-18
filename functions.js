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



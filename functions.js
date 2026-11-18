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

function getOnSale(all_games) 
{
    const games_on_sale = []

    for (let index = 0; index < all_games.length; index++) 
        {
            if (all_games[index].salePrice < all_games[index].normalPrice)
            {
                //games_on_sale[index] = all_games[index].title
                games_on_sale.push(all_games[index].title) 
            }
    }
    return games_on_sale
}



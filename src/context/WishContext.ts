import { createContext } from "react"

type WishContextType = {
  wishlist: Set<string>
  loading: boolean
  isWishlisted: (id: string) => boolean
  toggleWishlist: (id: string) => Promise<void>
}

export const WishContext = createContext<WishContextType>(null!)

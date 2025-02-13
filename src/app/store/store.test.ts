import { useStore } from "./"

describe("Store", () => {
  beforeEach(() => {
    useStore.setState({ favorites: [] })
  })

  it("adds favorite city", () => {
    const store = useStore.getState()
    store.addFavorite("London")

    expect(useStore.getState().favorites).toEqual(["London"])
  })

  it("removes favorite city", () => {
    const store = useStore.getState()
    store.addFavorite("London")
    store.removeFavorite("London")

    expect(useStore.getState().favorites).toEqual([])
  })

  it("prevents duplicate favorites", () => {
    const store = useStore.getState()
    store.addFavorite("London")
    store.addFavorite("London")

    expect(useStore.getState().favorites).toEqual(["London"])
  })
})

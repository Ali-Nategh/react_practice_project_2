import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

function App() {
  const cards = data.map((card) => {
    return <Card 
      key={card.id}
      title={card.title}
      location={card.location}
      googleMapsUrl={card.googleMapsUrl}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      imageUrl={card.imageUrl}
    />
  })
  return (
    <div className="container">
      <>
        <Header />
        {cards}
      </>
    </div>
  )
}

export default App

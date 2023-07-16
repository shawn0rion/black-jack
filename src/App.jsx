import { useState, useEffect } from "react";
import { dataset, loadImages } from "./data";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hand from "./components/Hand.jsx";
import Buttons from "./components/Buttons.jsx";
import "./App.css";
import styled from "styled-components";

const StyledResult = styled.div`
  position: absolute;
  top: 7%;
  left: 50%;
  padding: 15px 50px;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid #ccc;
  background-color: #eee;
  color: #333;
  text-align: center;
  transform: translateX(-50%);
`;

function App() {
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [result, setResult] = useState("");
  const [deck, setDeck] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerSum, setPlayerSum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);

  useEffect(() => {
    loadImages()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // initalize and shuffle the deck
    if (isLoaded) {
      init();
    }
  }, [isLoaded]);

  const init = () => {
    // handle the async setState by using a tempDeck
    let tempDeck = [...dataset].sort(() => Math.random() - 0.5);

    // Draw two cards for the player
    let tempPlayerHand = [tempDeck.pop(), tempDeck.pop()];

    // Get the hidden card
    const hidden = tempDeck.find((card) => card.value === "BACK");
    tempDeck = tempDeck.filter((card) => card.value !== "BACK"); // remove the hidden card from the deck

    // Draw one or two cards for the dealer
    let tempDealerHand =
      Math.random() > 0.5
        ? [hidden, tempDeck.pop(), tempDeck.pop()]
        : [hidden, tempDeck.pop()];

    setDeck(tempDeck);
    setPlayerHand(tempPlayerHand);
    setDealerHand(tempDealerHand);
  };

  const handleHitClick = () => {
    // randomly select a card from the deck
    setPlayerHand([...playerHand, deck.pop()]);
    // add a new card to the palyer cards
  };

  // GAME LOGIC to SET THE RESULT
  const handleStayClick = () => {
    // add RANDOM CARD instead of HIDDEN CARD
    // use temp deck to avoid async setState
    const tempDealerHand = [deck.pop(), ...dealerHand.slice(1)];

    const dealerSum = tempDealerHand.reduce((acc, card) => {
      // convert any face cards to 10
      const value = isNaN(parseInt(card.value)) ? 10 : parseInt(card.value);
      return value + acc;
    }, 0);
    const playerSum = playerHand.reduce((acc, card) => {
      const value = isNaN(parseInt(card.value)) ? 10 : parseInt(card.value);
      return value + acc;
    }, 0);

    // compare the sum of the cards
    if (playerSum > 21) setResult("Dealer");
    if (playerSum === dealerSum) setResult("tie");
    if (dealerSum > 21) setResult("Player");
    if (playerSum > dealerSum) setResult("Player");
    if (dealerSum > playerSum) setResult("Dealer");

    setPlayerSum(playerSum);
    setDealerSum(dealerSum);
    setDealerHand(tempDealerHand);
  };

  const handleReplayClick = () => {
    setResult("");
    setPlayerSum(0);
    setDealerSum(0);
    // shuffle deck, reset hands
    init();
  };
  return (
    <>
      <h1>Blackjack</h1>
      <h2>Dealer: {dealerSum > 0 ? dealerSum : ""}</h2>
      <Hand cards={dealerHand} />
      <h2>Player: {playerSum > 0 ? playerSum : ""}</h2>
      <Hand cards={playerHand} />
      <Buttons
        result={result}
        onHitClick={handleHitClick}
        onStayClick={handleStayClick}
        onReplayClick={handleReplayClick}
      />
      {result !== "" && (
        <StyledResult>
          {result === "tie" ? "It's a tie" : `${result} wins!`}
        </StyledResult>
      )}
    </>
  );
}

export default App;

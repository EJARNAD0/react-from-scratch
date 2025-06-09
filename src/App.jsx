// src/App.jsx
import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { DogList } from "./components/Doglist";
import { AdoptionForm } from "./components/AdoptionForm";

// ✅ Define dogs array here (or you can export it from another file if preferred)
const dogs = [
  {
    id: 1,
    name: "Buddy",
    breed: "shih tzu",
    image: "/images/1.jpeg",
  },
  {
    id: 2,
    name: "Luna",
    breed: "shih tzu",
    image: "/images/2.jpeg",
  },
  {
    id: 3,
    name: "Charlie",
    breed: "shih tzu",
    image: "/images/1.jpeg",
  },
];

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <DogList />
        <AdoptionForm dogs={dogs} />
      </Container>
    </PageWrapper>
  );
}

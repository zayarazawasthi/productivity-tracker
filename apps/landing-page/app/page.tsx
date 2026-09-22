import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Container from "./components/container";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="font-mono ">Hello world from landing page homepage</h1>
      </Container>
    </>
  );
}

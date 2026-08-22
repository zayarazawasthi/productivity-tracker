"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { add } from "shared-utils";



export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">Hello world from web Homepage</div>
  );
}

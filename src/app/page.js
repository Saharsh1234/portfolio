import Image from "next/image";
import Homesection from "@/components/Homesection";
import Aboutsection from "@/components/Aboutsection";
import Projectsection from "@/components/Projectsection";


export default function Home() {
  return (
    <>
        <Homesection />
        <Aboutsection />
        <Projectsection />
    </>
  );
}

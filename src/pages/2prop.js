import { Comp1 } from "@/components/2props/Comp1";

export default function Home() {
  const data = "Hello";
  const value = "Hi";
  return <Comp1 props1={data} props2={value} />;
}

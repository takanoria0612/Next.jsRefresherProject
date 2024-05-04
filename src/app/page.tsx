import homeImg from 'public/home.jpg';
import Hero from '@/components/hero';
console.log(homeImg);
export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
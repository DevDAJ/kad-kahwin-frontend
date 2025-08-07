import BottomBar from '@/components/BottomBar';
import MainSection from './sections/main';
import Details from './sections/details';
export default function Main() {
  return (
    <>
      <img
        src="https://www.onlinekad.com/images/designs/N001-1.webp"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover opacity-55 [transform:translate3d(0,0,0)]"
      />
      <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center mx-auto shadow-lg backdrop-blur-xs pb-40">
        <MainSection />
        <Details />
      </div>
      <BottomBar />
    </>
  );
}

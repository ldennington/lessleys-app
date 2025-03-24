import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex items-center h-20 px-4 bg-gray-200 sm:px-8">
      <Image
        src={logo}
        alt="Cordial Co-Hosting Logo"
        width={240}
        height={80}
        priority
      />
      <div className="grow" />
    </header>
  );
}
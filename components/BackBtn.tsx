'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = (className: { className?: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`flex items-center gap-2 px-4 py-2 text-white border-[1px] border-solid rounded-lg hover:scale-105  transition ${className}`}
    >
      <FaArrowLeft />
      <span>Go Back</span>
    </button>
  );
};

export default BackButton;

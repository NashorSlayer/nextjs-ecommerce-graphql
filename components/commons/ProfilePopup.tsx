import { useState } from 'react';
import { UserCircleIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const ProfilePopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={togglePopup}
          className="text-gray-300 focus:outline-none"
        >
          <UserCircleIcon className="w-12 h-12 ml-4" />
        </button>
      </div>
      {isPopupOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 2, borderRadius: 20}}>
          <div className="py-1 ">
            <Link href="/profile">
              <p className="text-bold flex items-center justify-center block px-4 py-2 text-sm text-white">
                <UserIcon className='w-4 h-4 mr-2'/> Ir al perfil
              </p>
            </Link>
            <button
              type="button"
              onClick={togglePopup}
              className="text-bold flex items-center justify-center block w-full text-left px-4 py-2 text-sm text-red-600"
            >
                <LogoutIcon className="w-4 h-4 mr-2" />Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
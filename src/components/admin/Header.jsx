import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = ({ toggleSidebar, isSidebarCollapsed }) => {
  return (
    <div className="bg-white p-5 px-6 h-fit flex items-center justify-between">
      <motion.div
        onClick={toggleSidebar}
        animate={{ rotate: isSidebarCollapsed ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/svg/left.svg"
          width={18}
          height={18}
          alt="Toggle Sidebar"
          className="cursor-pointer"style={{ display: 'block' }}
        />
      </motion.div>
      <div className="flex items-center">
        <img src="https://github.com/shadcn.png" alt="Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;

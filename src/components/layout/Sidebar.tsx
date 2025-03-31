import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import Link from 'next/link';

interface SidebarItem {
  icon: string;
  label: string;
  active?: boolean;
  href?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  sections: SidebarSection[];
  position?: 'left' | 'right';
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, position = 'left', children }) => {
  return (
    <div className={`${styles.sidebar} ${position === 'left' ? styles.leftSidebar : styles.rightSidebar}`}>
      {children ? (
        children
      ) : (
        sections.map((section, index) => (
          <div key={index} className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>{section.title}</h3>
            <ul className={styles.sidebarMenu}>
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ''}`}
                >
                  {item.href ? (
                    <Link href={item.href}>
                      <span>{item.icon}</span> {item.label}
                    </Link>
                  ) : (
                    <>
                      <span>{item.icon}</span> {item.label}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Sidebar;
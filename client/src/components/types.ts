export interface NavLink {
  name: string;
  to: string;
  active: string;
  type?:string;
}

export interface NavbarProps {
  darkmode: boolean;
  handleClick: () => void;
}

export interface DarkMode {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}


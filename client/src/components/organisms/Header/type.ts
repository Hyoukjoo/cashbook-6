export interface HeaderCalendarProps {
  date: Date;
  goNextMonth?: (date: Date) => void;
  goLastMonth?: (date: Date) => void;
}

export interface HeaderNavProps {
  currentPath: string;
  onClickNavButton?: (href: string) => void;
}

export interface HeaderProps extends HeaderCalendarProps, HeaderNavProps {}
